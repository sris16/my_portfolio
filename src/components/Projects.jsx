import { useState } from 'react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import { Github } from './Icons';
import ProjectDrawer from './ProjectDrawer';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Fix My Ward",
      description: "A civic issue reporting platform enabling citizens to submit and track local infrastructure problems. Features location detection, category tagging, and file uploads.",
      detailedDescription: "A robust civic issue reporting application that empowers citizens to highlight and report local complaints (like potholes, street light failures, or garbage pileups). It detects real-time coordinates, allows uploading photographic proof, and routes issues to municipal offices.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
      category: "Web Dev",
      github: "https://github.com/sris16/fix-my-ward",
      demo: "#",
      features: [
        "Real-time geolocation capturing with Leaflet/Google Maps API",
        "Multi-category issue categorization",
        "Image upload verification pipeline",
        "Admin control panel for municipal workers to update report statuses (Open, In Progress, Resolved)"
      ],
      challenge: "Accurately resolving client location when GPS signals are weak or browser access is disabled, and handling high-resolution photo uploads on limited backend bandwidth.",
      solution: "Implemented fallback IP location detection and client-side image compression (canvas-based) before sending data to the Node.js backend API, drastically saving bandwidth."
    },
    {
      id: 2,
      title: "Traveloop",
      description: "An intelligent travel planning web application that leverages user input to generate budget-optimized travel itineraries, customized sightseeing schedules, and detailed expense tracking.",
      detailedDescription: "An AI-powered itinerary builder designed to eliminate the complexity of manual travel booking. Users enter destination parameters, date frames, and budgets, and the app serves customized day-by-day itineraries, including cost analytics.",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AI API Integration"],
      category: "AI & ML",
      github: "https://github.com/sris16/traveloop",
      demo: "#",
      features: [
        "Intelligent day-by-day timeline generation",
        "Visual budget analytic dashboards (pie charts/expenses tracking)",
        "Interactive map paths showing routing optimization",
        "PDF export option for offline travel itinerary access"
      ],
      challenge: "Creating highly personalized itineraries that match budgets without triggering excessive external API calls, which are costly and slow.",
      solution: "Created a smart caching layer with Redis to store common destinations and used custom heuristics combined with AI prompts to batch itinerary compilation."
    },
    {
      id: 3,
      title: "Premium Restaurant Showcase",
      description: "A visually rich multi-brand restaurant website built to maximize user experience and customer engagement, demonstrating modern CSS, fluid responsive typography, and performance optimization.",
      detailedDescription: "A premium landing site built for a restaurant conglomerate managing multiple food brands. Emphasizes modern layout principles, custom interactive reservation forms, and ultra-fast page speed metrics.",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO Optimization", "UX Design"],
      category: "Web Dev",
      github: "https://github.com/sris16/restaurant-website",
      demo: "#",
      features: [
        "Responsive typography and fluid multi-column menus",
        "Interactive date-time reservation scheduler widget",
        "Sleek SVG micro-animations on food items",
        "95+ Google Lighthouse speed and SEO score compliance"
      ],
      challenge: "Loading a high volume of high-resolution asset images without causing layout shift (CLS) or decreasing mobile loading speeds.",
      solution: "Applied modern CSS grid layouts with explicit aspect ratios, lazy-loaded offscreen menus, and used WebP/AVIF media generation to decrease asset payloads by over 60%."
    }
  ];

  const categories = ['All', 'Web Dev', 'AI & ML'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section reveal" style={{ position: 'relative' }}>
      {/* Background decorations */}
      <div className="section-anim-bg">
        <span className="float-bracket" style={{ left: '5%', fontSize: '1.8rem', animationDelay: '0s', animationDuration: '20s' }}>{"{"}</span>
        <span className="float-bracket" style={{ left: '20%', fontSize: '2rem', animationDelay: '3s', animationDuration: '24s' }}>{"}"}</span>
        <span className="float-bracket" style={{ left: '38%', fontSize: '1.6rem', animationDelay: '7s', animationDuration: '18s' }}>{"["}</span>
        <span className="float-bracket" style={{ left: '55%', fontSize: '1.8rem', animationDelay: '2s', animationDuration: '22s' }}>{"]"}</span>
        <span className="float-bracket" style={{ left: '72%', fontSize: '2.2rem', animationDelay: '9s', animationDuration: '26s' }}>{"</>"}</span>
        <span className="float-bracket" style={{ left: '88%', fontSize: '1.7rem', animationDelay: '5s', animationDuration: '21s' }}>{"=>"}</span>
        <span className="float-bracket" style={{ left: '48%', fontSize: '1.9rem', animationDelay: '12s', animationDuration: '25s' }}>{"&&"}</span>
        <span className="float-bracket" style={{ left: '95%', fontSize: '2.1rem', animationDelay: '4s', animationDuration: '23s' }}>{"||"}</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
              onClick={(e) => {
                e.stopPropagation();
                setFilter(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="project-card glass-panel"
              onClick={() => setSelectedProject(project)}
            >
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
                    onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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

      {/* Slide-out Sidebar Drawer */}
      <ProjectDrawer 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}
