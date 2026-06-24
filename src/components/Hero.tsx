import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const profileCardRef = useRef<HTMLDivElement>(null);
  const resumeBtnRef = useRef<HTMLButtonElement>(null);
  const githubBtnRef = useRef<HTMLAnchorElement>(null);

  const openResume = () => {
    const url =
      "https://drive.google.com/file/d/1-86V74stDnazr_9opL7UjG_tUBQ1UhUs/view?usp=sharing";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = profileCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    if (profileCardRef.current) {
      profileCardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  const handleMagnetMove = useCallback((e: React.MouseEvent, el: HTMLElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, []);

  const handleMagnetLeave = useCallback((el: HTMLElement | null) => {
    if (el) el.style.transform = "translate(0, 0)";
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden hero-bloom"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, var(--glow-1) 0%, var(--bg-primary) 55%),
          radial-gradient(ellipse at 80% 20%, var(--glow-2) 0%, transparent 60%)
        `,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-blob-1 {
          position: absolute;
          top: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--bg-hero-blob-1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-blob-2 {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--bg-hero-blob-2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .stat-card {
          animation: cardFadeIn 1s 0.3s ease both;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border-card);
        }

        .stat-row:last-child {
          border-bottom: none;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--bg-stat-icon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-stat-label);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
        }

        .stat-value {
          font-size: 0.92rem;
          color: var(--text-stat-value);
          font-weight: 500;
        }

        .hero-btn-resume {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .hero-btn-resume::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, var(--accent-secondary), var(--accent));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .hero-btn-resume:hover::before {
          opacity: 1;
        }
        .hero-btn-resume:hover {
          color: var(--text-on-accent);
          box-shadow: 0 4px 25px var(--accent-glow);
        }

        .hero-btn-ghost {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .hero-btn-ghost::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: var(--accent-btn-bg);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .hero-btn-ghost:hover::before {
          opacity: 1;
        }
        .hero-btn-ghost:hover {
          color: var(--accent);
          border-color: var(--accent-border);
          box-shadow: 0 0 20px var(--accent-btn-bg);
        }
      `}</style>

      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4 font-medium"
            style={{ color: "var(--accent-secondary)", letterSpacing: "0.2em" }}
          >
            ✿ welcome to my portfolio
          </p>

          <h1
            className="leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Hi there,
            <br />
            I'm{" "}
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              Niketha
            </em>
          </h1>

          <div
            className="mb-6 text-base font-normal"
            style={{ color: "var(--text-muted)", minHeight: "1.6em" }}
          >
            <TypeAnimation
              sequence={[
                "AI & Data Science Student",
                2000,
                "Aspiring Software Engineer",
                2000,
                "Frontend Developer in Progress",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p
            className="text-sm leading-relaxed mb-9 max-w-md mx-auto md:mx-0"
            style={{ color: "var(--text-dim)" }}
          >
            A passionate engineering student focused on building real-world
            applications using AI, data science, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">

            <button
              ref={resumeBtnRef}
              onClick={openResume}
              className="hero-btn-resume magnetic-btn px-6 py-3 rounded-full text-sm font-medium"
              onMouseMove={(e) => handleMagnetMove(e, resumeBtnRef.current)}
              onMouseLeave={() => handleMagnetLeave(resumeBtnRef.current)}
              style={{
                background: "transparent",
                color: "var(--text-on-accent)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              ✦ View Resume
            </button>

            <a
              ref={githubBtnRef}
              href="https://github.com/niketha121107"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-ghost magnetic-btn px-6 py-3 rounded-full text-sm font-medium"
              onMouseMove={(e) => handleMagnetMove(e, githubBtnRef.current)}
              onMouseLeave={() => handleMagnetLeave(githubBtnRef.current)}
              style={{
                background: "transparent",
                color: "var(--text-muted)",
                border: "1px solid var(--border-ghost)",
              }}
            >
              GitHub
            </a>

          </div>
        </motion.div>

        <motion.div
          ref={profileCardRef}
          className="stat-card flex-shrink-0 card-warm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            width: "260px",
            borderRadius: "20px",
            background: "linear-gradient(160deg, var(--bg-card-start) 0%, var(--bg-card-end) 100%)",
            border: "1px solid var(--border-card)",
            boxShadow: "var(--shadow-card), var(--shadow-card-inner)",
            padding: "22px 20px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "14px",
              borderBottom: "1px solid var(--border-card)",
            }}
          >
            <p style={{ fontSize: "0.68rem", color: "var(--text-stat-label)" }}>
              Profile
            </p>

            <p style={{ fontSize: "1rem", color: "var(--text-profile-name)", fontWeight: 600 }}>
              Niketha MS
            </p>

            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              B.Tech - AI & Data Science
            </p>
          </div>

          <div className="stat-row">
            <div className="stat-icon">🎓</div>
            <div>
              <p className="stat-label">College</p>
              <p className="stat-value">
                Karunya Institute (2025–2029)
              </p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-icon">🏫</div>
            <div>
              <p className="stat-label">School</p>
              <p className="stat-value">
                Avila Convent Matriculation
              </p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-icon">💡</div>
            <div>
              <p className="stat-label">Interest</p>
              <p className="stat-value">
                AI · Data Science · Web Dev
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
