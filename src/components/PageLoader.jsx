import { useState, useEffect } from 'react';

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const logSteps = [
    { threshold: 5, text: "srisakthi@portfolio:~$ init --portfolio-system" },
    { threshold: 25, text: "▶ Loading core configuration modules... [OK]" },
    { threshold: 45, text: "▶ Loading AI & Machine Learning student credentials... [OK]" },
    { threshold: 65, text: "▶ Linking full-stack web development profiles... [OK]" },
    { threshold: 85, text: "▶ Initializing interactive canvas particle engines... [OK]" },
    { threshold: 98, text: "srisakthi@portfolio:~$ launch --live" }
  ];

  useEffect(() => {
    // Check if user has already loaded this session
    const hasLoaded = sessionStorage.getItem("portfolio_loaded");
    if (hasLoaded === "true") {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1;
        
        // Add matching log entries as we progress
        const matchedLog = logSteps.find(step => step.threshold === nextProgress);
        if (matchedLog) {
          setLogs((prevLogs) => [...prevLogs, matchedLog.text]);
        }

        if (nextProgress >= 100) {
          clearInterval(interval);
          // Small delay at 100% for smooth finish
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              sessionStorage.setItem("portfolio_loaded", "true");
              onComplete();
            }, 600); // match css transition duration
          }, 400);
          return 100;
        }
        return nextProgress;
      });
    }, 20); // Total loading time ~ 2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  // If already loaded in session, don't render anything
  if (sessionStorage.getItem("portfolio_loaded") === "true") {
    return null;
  }

  return (
    <div className={`page-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-container">
        {/* Terminal Header */}
        <div className="loader-terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="terminal-title">srisakthi_portfolio_boot.sh</div>
        </div>

        {/* Terminal Console Logs */}
        <div className="loader-console">
          {logs.map((log, index) => (
            <div key={index} className={`console-line ${log.startsWith('srisakthi') ? 'prompt' : 'status'}`}>
              {log}
            </div>
          ))}
          {progress < 100 && (
            <div className="console-line cursor-line">
              <span className="console-cursor"></span>
            </div>
          )}
        </div>

        {/* Circular Ring Progress Loader */}
        <div className="loader-progress-section">
          <div className="circular-loader">
            <svg className="progress-ring" width="80" height="80">
              <circle
                className="progress-ring-bg"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="4"
                fill="transparent"
                r="34"
                cx="40"
                cy="40"
              />
              <circle
                className="progress-ring-bar"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                fill="transparent"
                r="34"
                cx="40"
                cy="40"
                style={{
                  strokeDasharray: `${2 * Math.PI * 34}`,
                  strokeDashoffset: `${2 * Math.PI * 34 * (1 - progress / 100)}`
                }}
              />
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="progress-percentage">{progress}%</div>
          </div>
          <span className="loading-label">System Initializing</span>
        </div>
      </div>
    </div>
  );
}
