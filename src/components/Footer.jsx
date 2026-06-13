import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Srisakthi R. Built with React.
        </div>

        <div className="footer-socials">
          <a 
            href="https://github.com/sris16" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/srisakthi-r-89858b342?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:srisakthi7890@gmail.com" 
            className="footer-social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <button 
            onClick={handleScrollToTop} 
            className="footer-social-link" 
            aria-label="Scroll to Top"
            title="Back to Top"
            style={{ cursor: 'pointer' }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
