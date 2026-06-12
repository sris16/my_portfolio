import { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import profileImg from "../assets/profile.png";

export default function Hero() {
  const roles = [
    "AI & ML Student",
    "Full-Stack Web Developer",
    "Problem Solver",
    "Java Programmer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background decorations */}
      <div className="cyber-grid"></div>
      <div className="hero-glow-node-1"></div>
      <div className="hero-glow-node-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hi, my name is</div>
          <h1 className="hero-title">
            <span className="gradient-text">Srisakthi R</span>
          </h1>

          <div className="hero-subtitle-container">
            <span>I'm a </span>
            <span style={{ color: "var(--accent-secondary)" }}>
              {currentText}
            </span>
            <span className="hero-cursor"></span>
          </div>

          <p className="hero-description">
            I am a motivated B.Sc. Artificial Intelligence & Machine Learning
            student with hands-on experience in full-stack web development, Java
            programming, and real-world project creation. I'm passionate about
            building scalable, user-centric applications and exploring emerging
            technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => handleScrollTo("projects")}
            >
              View Work <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScrollTo("contact")}
            >
              Contact Me
            </button>
          </div>

          <div
            className="footer-socials"
            style={{ marginTop: "2.5rem", justifyContent: "flex-start" }}
          >
            <a
              href="https://github.com/sris16"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/srisakthi-r"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:srisakthi7890@gmail.com"
              className="footer-social-link"
              aria-label="Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img src={profileImg} alt="Srisakthi R" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
