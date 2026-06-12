import { useEffect } from 'react';
import { X, ExternalLink, Cpu, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectDrawer({ isOpen, onClose, project }) {
  // Close drawer on Esc key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Slide-out Sidebar Panel */}
      <div className={`drawer-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <span className="drawer-title">{project.title}</span>
          <button className="drawer-close" onClick={onClose} aria-label="Close panel">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {/* Category Badges & Thumbnail area */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
            <span className="badge">{project.category}</span>
            <span className="badge badge-outline">Featured Project</span>
          </div>

          {/* Description */}
          <div>
            <h4 className="drawer-section-title">
              <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
              Overview
            </h4>
            <p className="drawer-text">{project.detailedDescription || project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h4 className="drawer-section-title">
                <CheckCircle size={16} style={{ color: '#10b981' }} />
                Key Features
              </h4>
              <ul className="drawer-list">
                {project.features.map((feature, i) => (
                  <li key={i} className="drawer-list-item">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenge && (
            <div>
              <h4 className="drawer-section-title" style={{ color: 'var(--text-primary)' }}>
                <AlertTriangle size={16} style={{ color: '#fbbf24' }} />
                Challenge
              </h4>
              <p className="drawer-text" style={{ marginBottom: '1rem' }}>{project.challenge}</p>
              
              <h4 className="drawer-section-title">
                <Lightbulb size={16} style={{ color: '#14b8a6' }} />
                Solution
              </h4>
              <p className="drawer-text">{project.solution}</p>
            </div>
          )}

          {/* Tech Stack Badge area */}
          <div>
            <h4 className="drawer-section-title">
              <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
              Technologies Used
            </h4>
            <div className="project-tags" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="badge badge-outline">{tag}</span>
              ))}
            </div>
          </div>

          {/* Project Action Links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
              style={{ flex: 1, padding: '0.65rem' }}
            >
              <Github size={18} /> Source Code
            </a>
            {project.demo !== '#' && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
