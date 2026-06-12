import { Code2, Laptop, Wrench, Trophy, Award, Calendar, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} className="skill-icon" />,
      skills: ["Java", "Python", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: <Laptop size={20} className="skill-icon" />,
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={20} className="skill-icon" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Ubuntu Linux"]
    }
  ];

  const achievements = [
    {
      title: "Intra-College Hackathon Winner",
      subtitle: "Visitor Management System",
      desc: "Won 1st prize for conceptualizing and developing a modern digital check-in platform for campus guests.",
      icon: <Trophy size={20} style={{ color: '#fbbf24' }} />,
      meta: "KPR CAS"
    },
    {
      title: "Bharatiya Antariksh Hackathon",
      subtitle: "ISRO Initiative",
      desc: "Participated in the national hackathon focusing on space-tech data applications.",
      icon: <Sparkles size={20} style={{ color: '#a78bfa' }} />,
      meta: "2025"
    },
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "National Level Hackathon",
      desc: "Collaborated in a team of 6 to design solutions for key government ministries.",
      icon: <Sparkles size={20} style={{ color: '#60a5fa' }} />,
      meta: "2025"
    },
    {
      title: "Responsive Web Design Certification",
      subtitle: "FreeCodeCamp Legacy V8",
      desc: "Completed 300+ hours of responsive web design coursework, including media queries and flexbox projects.",
      icon: <Award size={20} style={{ color: '#10b981' }} />,
      meta: "Online credential"
    }
  ];

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Achievements</h2>
          <p className="section-subtitle">A summary of my technical toolkit and co-curricular accomplishments.</p>
        </div>

        <div className="skills-achievements-grid">
          {/* Left Column: Skills Matrix */}
          <div className="skills-wrapper">
            {skillCategories.map((category, index) => (
              <div key={index} className="skills-group">
                <h3 className="skills-category-title">
                  {category.icon}
                  {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-tag">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements & Certifications */}
          <div className="achievements-panel glass-panel">
            <h3 className="timeline-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={22} style={{ color: 'var(--accent-primary)' }} />
              Co-curricular Activities & Awards
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="achievement-details">
                    <span className="achievement-title">{item.title}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 500 }}>
                      {item.subtitle}
                    </span>
                    <p className="achievement-desc">{item.desc}</p>
                    <span className="achievement-meta">{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
