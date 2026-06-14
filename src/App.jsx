import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import './App.css';

function App() {
  // Page loading state
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem("portfolio_loaded") !== "true";
  });

  // Theme state defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply theme class to HTML node
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (event) => {
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      return;
    }

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const isGrowing = theme === 'dark'; // Dark to Light grows, Light to Dark shrinks
    const direction = isGrowing ? 'grow' : 'shrink';
    document.documentElement.setAttribute('data-transition-direction', direction);

    const transition = document.startViewTransition(() => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isGrowing ? clipPath : clipPath.reverse(),
        },
        {
          duration: 400, // Snap transition timing for butter-smooth feel
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: isGrowing ? '::view-transition-new(root)' : '::view-transition-old(root)',
        }
      );
    });

    // Clean up direction attribute once complete
    transition.finished.then(() => {
      document.documentElement.removeAttribute('data-transition-direction');
    });
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll depth
  useEffect(() => {
    if (isLoading) return;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  // Scroll reveal animation observer
  useEffect(() => {
    if (isLoading) return;
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <PageLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
