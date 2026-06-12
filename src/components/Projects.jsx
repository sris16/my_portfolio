import { useState } from 'react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "Fix My Ward",
      description: "A civic issue reporting platform enabling citizens to submit and track local infrastructure problems. Features location detection, category tagging, and file uploads to streamline civic resolution.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
      category: "Web Dev",
      github: "https://github.com/sris16/fix-my-ward",
      demo: "#"
    },
    {
      id: 2,
      title: "Traveloop",
      description: "An intelligent travel planning web application that leverages user input to generate budget-optimized travel itineraries, customized sightseeing schedules, and detailed expense tracking metrics.",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AI API Integration"],
      category: "AI & ML",
      github: "https://github.com/sris16/traveloop",
      demo: "#"
    },
    {
      id: 3,
      title: "Premium Restaurant Showcase",
      description: "A visually rich multi-brand restaurant website built to maximize user experience and customer engagement, demonstrating modern CSS, fluid responsive typography, and performance optimization.",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO Optimization", "UX Design"],
      category: "Web Dev",
      github: "https://github.com/sris16/restaurant-website",
      demo: "#"
    }
  ];

  const categories = ['All', 'Web Dev', 'AI & ML'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A collection of academic, hackathon, and side projects showcasing my development skills.</p>
        </div>

        {/* Filter Selection Tabs */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-panel">
              <div className="project-thumbnail-wrapper">
                <div className="project-thumbnail-placeholder">
                  {project.category === 'AI & ML' ? <Layers size={40} /> : <Code2 size={40} />}
                  <span style={{ marginTop: '8px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                    {project.category} Project
                  </span>
                </div>
              </div>

              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-outline">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link"
                    title="View Source Code"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link"
                      title="View Live Demo"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
