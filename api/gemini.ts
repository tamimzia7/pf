import type { VercelRequest, VercelResponse } from '@vercel/node'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const SECTION_CONTEXT: Record<string, string> = {
  home: 'Hero / Home section - Introduction to Tamim Zia, a Full Stack Laravel Developer. Shows his name, role, short bio, description, profile image, and social links.',
  about: 'About section - Who Tamim Zia is. Contains paragraphs about his background as a CSE student and Laravel-focused web developer, plus highlights of his expertise areas.',
  'what-i-do': 'What I Do section - Overview of what Tamim builds. Shows his core capabilities and types of applications he develops.',
  skills: 'Skills & Technology section - Lists Tamim\'s technical skills organized by category: Frontend, Backend, Database, Tools & Testing. Shows technologies like React, Laravel, PHP, MySQL, etc.',
  projects: 'Projects & Case Studies section - Selected software projects that demonstrate Tamim\'s approach to architecture, development and problem solving. Includes project cards with details.',
  services: 'Services section - Practical software development services Tamim offers: Full Stack Development, Backend & API Development, Business Systems, Database Design, API Integration.',
  resume: 'Resume section - Professional journey including work experience, education, and career timeline.',
  testimonials: 'Testimonials section - Client feedback and reviews about working with Tamim.',
  blog: 'Blog & Articles section - Thought pieces about software development, Laravel, system design, and technology.',
  contact: 'Contact section - Form and details for getting in touch with Tamim for projects or collaboration.',
}

function getSystemPrompt(): string {
  return `You are an AI portfolio guide for Tamim Zia's portfolio website. You are a friendly, knowledgeable assistant that helps visitors understand the portfolio.

Rules:
- Keep responses under 3 sentences (roughly 40-60 words)
- Be professional, concise, and engaging
- Sound natural and conversational
- Always reference Tamim by name when appropriate
- Never make up information not provided in the section context
- Do not use markdown formatting - just plain text
- Do not start with "You're looking at" or similar patterns every time - vary your opening
- Be helpful and guide the visitor`
}

function buildPrompt(sectionId: string, sectionData: string): string {
  return `A visitor is currently viewing the "${sectionId}" section of Tamim Zia's portfolio.

Section details: ${sectionData}

Provide a brief, engaging explanation of what this section contains and why it matters for understanding Tamim's work.`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not configured' })
  }

  const { sectionId, message } = req.body

  if (!sectionId || typeof sectionId !== 'string') {
    return res.status(400).json({ error: 'sectionId is required' })
  }

  const sectionData = SECTION_CONTEXT[sectionId]
  if (!sectionData) {
    return res.status(400).json({ error: `Unknown section: ${sectionId}` })
  }

  const userMessage = message && typeof message === 'string' ? message : null

  try {
    const model = 'gemini-2.0-flash'
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`

    const prompt = userMessage
      ? `Context: This is Tamim Zia's portfolio. The visitor is currently near the "${sectionId}" section.

Section details: ${sectionData}

The visitor asks: "${userMessage}"

Answer their question based on the portfolio context. Be helpful, concise (under 3 sentences), and guide them through the portfolio.`
      : buildPrompt(sectionId, sectionData)

    const geminiResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        systemInstruction: {
          parts: [{ text: getSystemPrompt() }],
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 150,
          topP: 0.9,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    })

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text()
      console.error('Gemini API error:', geminiResponse.status, errorText)
      return res.status(502).json({ error: 'Failed to get response from AI' })
    }

    const data = await geminiResponse.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      return res.status(502).json({ error: 'No response generated' })
    }

    return res.status(200).json({ text: text.trim() })
  } catch (error) {
    console.error('Gemini handler error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
