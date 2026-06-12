import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const timelineData = [
    {
      title: "B.Sc. Artificial Intelligence & Machine Learning",
      institution: "KPR College of Arts Science and Research",
      period: "2024 – Present",
      location: "Coimbatore, Tamil Nadu",
      description: "Focusing on core AI/ML subjects including Python programming, data science foundation, basic machine learning algorithms, and full-stack software development. Currently holding a CGPA of 7.2/10 up to Semester 3."
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "SRNV Higher Secondary School",
      period: "Passed out 2024",
      location: "Coimbatore, Tamil Nadu",
      description: "Completed secondary education specializing in Science and Mathematics track with a grade of 80%."
    },
    {
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sree Dharmashastha Matriculation Higher Secondary School",
      period: "Passed out 2022",
      location: "Saravanampatti, Coimbatore, Tamil Nadu",
      description: "Completed general secondary school coursework with a score of 84%."
    }
  ];

  const softSkills = [
    "Communication",
    "Teamwork & Collaboration",
    "Leadership",
    "Adaptability",
    "Problem Solving",
    "Analytical Thinking"
  ];

  return (
    <section id="about" className="section reveal">
      <div className="container">
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

          {/* Right Column: Academic Timeline */}
          <div>
            <h3 className="timeline-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent-primary)' }} />
              Education
            </h3>
            
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <h4 className="timeline-title">{item.title}</h4>
                    <span className="timeline-subtitle">{item.institution}</span>
                    <div className="timeline-meta">
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14} /> {item.period}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} /> {item.location}
                      </span>
                    </div>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
