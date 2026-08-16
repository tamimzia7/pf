import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-main-text">
          Tamim Zia
        </h1>
        <p className="text-xl text-center text-secondary-text max-w-2xl mx-auto mb-8">
          Full Stack Developer
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-main-text">Skills</h2>
            <p className="text-muted-text mb-4">
              Expertise in modern web technologies
            </p>
            <button className="btn-primary w-full">Learn More</button>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-main-text">Projects</h2>
            <p className="text-muted-text mb-4">
              Innovative solutions for complex problems
            </p>
            <button className="btn-primary w-full">View Work</button>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-main-text">Contact</h2>
            <p className="text-muted-text mb-4">
              Let's build something great together
            </p>
            <button className="btn-primary w-full">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App