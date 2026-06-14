import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const softSkills = [
    "Communication",
    "Teamwork & Collaboration",
    "Leadership",
    "Adaptability",
    "Problem Solving",
    "Analytical Thinking"
  ];

  return (
    <section id="about" className="section reveal" style={{ position: 'relative' }}>
      {/* Background decorations */}
      <div className="section-anim-bg">
        <span className="float-symbol" style={{ left: '5%', fontSize: '1.2rem', animationDelay: '0s', animationDuration: '14s' }}>∑</span>
        <span className="float-symbol" style={{ left: '20%', fontSize: '1.5rem', animationDelay: '2s', animationDuration: '16s' }}>√</span>
        <span className="float-symbol" style={{ left: '38%', fontSize: '1rem', animationDelay: '5s', animationDuration: '12s' }}>f(x)</span>
        <span className="float-symbol" style={{ left: '55%', fontSize: '1.4rem', animationDelay: '1s', animationDuration: '15s' }}>λ</span>
        <span className="float-symbol" style={{ left: '72%', fontSize: '1.1rem', animationDelay: '6s', animationDuration: '13s' }}>π</span>
        <span className="float-symbol" style={{ left: '88%', fontSize: '1.3rem', animationDelay: '3s', animationDuration: '17s' }}>01</span>
        <span className="float-symbol" style={{ left: '48%', fontSize: '1.2rem', animationDelay: '7s', animationDuration: '14s' }}>dy/dx</span>
        <span className="float-symbol" style={{ left: '95%', fontSize: '1.5rem', animationDelay: '4s', animationDuration: '18s' }}>θ</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A summary of my background, academic path, and professional drive.</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Biography & Soft Skills */}
          <div className="about-details">
            <h3 className="timeline-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>My Story</h3>
            <p className="about-text">
              I am a motivated B.Sc. Artificial Intelligence & Machine Learning undergraduate based in Sulur, Coimbatore. From a strong background in science, I have expanded my skills into modern software engineering, web development, and object-oriented systems.
            </p>
            <p className="about-text">
              Passionate about real-world applicability, I continuously challenge myself with college initiatives, hackathons, and self-learning platforms like freeCodeCamp. My focus is on building user-friendly web platforms that combine efficient backend systems with intelligent frontends.
            </p>

            <h3 className="timeline-title" style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Core Strengths</h3>
            <div className="about-highlights-grid">
              <div className="highlight-box glass-panel">
                <span className="highlight-title">Full-Stack Tech</span>
                <span className="highlight-desc">Hands-on experience developing frontends in React and backends with Node/Express.</span>
              </div>
              <div className="highlight-box glass-panel">
                <span className="highlight-title">AI & ML Focus</span>
                <span className="highlight-desc">Exploring data analytics, core machine learning pipelines, and predictive algorithms.</span>
              </div>
            </div>

            <h3 className="timeline-title" style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <span key={index} className="badge badge-outline" style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Profile */}
          <div>
            <h3 className="timeline-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent-primary)' }} />
              Education
            </h3>
            
            <div className="education-card glass-panel" style={{ padding: '1.75rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    B.Sc. Artificial Intelligence & Machine Learning
                  </h4>
                  <span style={{ fontSize: '0.95rem', color: 'var(--accent-secondary)', fontWeight: 500 }}>
                    KPR College of Arts Science and Research
                  </span>
                </div>
                <span className="badge badge-outline" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Active Candidate
                </span>
              </div>

              <div className="timeline-meta" style={{ display: 'flex', gap: '1.25rem', color: '#9ca3af', fontSize: '0.85rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} /> 2024 – Present
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> Coimbatore, Tamil Nadu
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0.5rem 0' }}>
                Focusing on core AI/ML subjects including Python programming, data science foundation, basic machine learning algorithms, and full-stack software development. Currently holding a CGPA of 7.2/10 up to Semester 3.
              </p>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#9ca3af', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  Core Curriculum Focus:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-outline">Data Structures</span>
                  <span className="badge badge-outline">Python & Java OOP</span>
                  <span className="badge badge-outline">Machine Learning Fundamentals</span>
                  <span className="badge badge-outline">Full-Stack Web Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
