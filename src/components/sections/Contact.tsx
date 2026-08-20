import React, { useState } from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { socialLinks } from '@/data/links';

const sectionLabel = 'GET IN TOUCH';
const sectionTitle = "Let's Build Something Together";
const sectionDescription = "Have an idea, a project or a business problem that needs a software solution? Let's talk about it.";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (in a real app, you would send this to a backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      // Reset form
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Extract email from socialLinks
  const emailLink = socialLinks.find(link => link.platform === 'Email');
  const email = emailLink ? emailLink.url.replace('mailto:', '') : '';

  return (
    <Section id="contact" className="bg-soft-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="reveal mb-6 sm:mb-8 lg:mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {sectionLabel}
          </p>
          <h2 className="text-xl font-bold text-main-text sm:text-2xl lg:text-3xl">
            {sectionTitle}
          </h2>
          <p className="mb-6 text-secondary-text lg:text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Form Status */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-primary/10 border border-primary/20' : 'bg-red-50 border border-red-200'}`}>
            <p className={`${submitStatus.type === 'success' ? 'text-primary' : 'text-red-600'}`}>
              {submitStatus.message}
            </p>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="reveal reveal-group grid gap-8 lg:grid-cols-2" data-stagger="80">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="mb-2 text-lg sm:text-xl font-semibold text-main-text">Contact Information</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon as any; // We know it's a LucideIcon from the data
                return (
                  <div key={link.platform} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>
                      {link.platform === 'Email' ? (
                        <a href={link.url} className="text-secondary-text hover:text-primary">
                          {email}
                        </a>
                      ) : (
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary">
                          {link.platform}
                        </a>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-2 text-lg sm:text-xl font-semibold text-main-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-main-text mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-main-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-main-text mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-main-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-main-text mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-main-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-main-text mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-main-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};