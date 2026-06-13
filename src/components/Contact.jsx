import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("VITE_WEB3FORMS_ACCESS_KEY is missing in your environment configuration.");
      setStatus('config-error');
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
          from_name: `${formData.name} (via Portfolio)`
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error("Web3Forms response error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms submit error:", error);
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 6000);
  };

  return (
    <section id="contact" className="section reveal" style={{ position: 'relative' }}>
      {/* Background decorations */}
      <div className="section-anim-bg">
        <div className="contact-ripple" style={{ left: '20%', top: '50%', animationDelay: '0s' }}></div>
        <div className="contact-ripple" style={{ left: '20%', top: '50%', animationDelay: '4s' }}></div>
        <div className="contact-ripple" style={{ left: '80%', top: '40%', animationDelay: '2s' }}></div>
        <div className="contact-ripple" style={{ left: '80%', top: '40%', animationDelay: '6s' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for projects, collaboration, or academic questions.</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-text">
                I'm currently seeking internships and junior roles in software engineering, frontend development, or AI/ML. Drop a line and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-methods">
              {/* Email Card */}
              <div className="contact-card glass-panel">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Email Me</div>
                  <a href="mailto:srisakthi7890@gmail.com" className="contact-card-value">
                    srisakthi7890@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-card glass-panel">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Call Me</div>
                  <a href="tel:+918675229591" className="contact-card-value">
                    +91 8675229591
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-card glass-panel">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Location</div>
                  <div className="contact-card-value">Sulur, Coimbatore, TN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                required
              />
            </div>

            {/* Submission Status Message */}
            {status === 'success' && (
              <div className="form-status success">
                Your message has been sent successfully. Srisakthi will contact you soon!
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                Something went wrong. Please check your network and try again.
              </div>
            )}
            {status === 'config-error' && (
              <div className="form-status error" style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>
                Form is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your env settings.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
