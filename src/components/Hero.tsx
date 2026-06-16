import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  // ✅ Resume open logic added
  const openResume = () => {
    const url =
      "https://drive.google.com/file/d/1-86V74stDnazr_9opL7UjG_tUBQ1UhUs/view?usp=sharing";

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
        backgroundColor: "#1a1a1f",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-blob-1 {
          position: absolute;
          top: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(180,100,120,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-blob-2 {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(120,80,160,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .stat-card {
          animation: cardFadeIn 1s 0.3s ease both;
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
          border-bottom: 1px solid rgba(200,140,160,0.1);
        }

        .stat-row:last-child {
          border-bottom: none;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(192,116,138,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .stat-label {
          font-size: 0.7rem;
          color: #6e5a5a;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
        }

        .stat-value {
          font-size: 0.92rem;
          color: #d4b8c0;
          font-weight: 500;
        }
      `}</style>

      {/* Background blobs */}
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4 font-medium"
            style={{ color: "#c0748a", letterSpacing: "0.2em" }}
          >
            ✿ welcome to my portfolio
          </p>

          <h1
            className="leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#f0e8e8",
            }}
          >
            Hi there,
            <br />
            I'm{" "}
            <em style={{ fontStyle: "italic", color: "#d4859a" }}>
              Niketha
            </em>
          </h1>

          <div
            className="mb-6 text-base font-normal"
            style={{ color: "#a07888", minHeight: "1.6em" }}
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
            style={{ color: "#8a7070" }}
          >
            A passionate engineering student focused on building real-world
            applications using AI, data science, and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">

            {/* ✅ UPDATED RESUME BUTTON */}
            <button
              onClick={openResume}
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{
                background: "transparent",
                color: "#fff0f3",
                boxShadow: "0 4px 20px rgba(180,100,120,0.3)",
              }}
            >
              ✦ View Resume
            </button>

            <a
              href="https://github.com/niketha121107"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{
                background: "transparent",
                color: "#a07888",
                border: "1px solid rgba(180,120,140,0.35)",
              }}
            >
              GitHub
            </a>

            <a
              href="mailto:msniketha1211@gmail.com"
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{
                background: "transparent",
                color: "#a07888",
                border: "1px solid rgba(180,120,140,0.35)",
              }}
            >
              Contact
            </a>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="stat-card flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: "260px",
            borderRadius: "20px",
            background: "linear-gradient(160deg, #25202e 0%, #1e1825 100%)",
            border: "1px solid rgba(200,140,160,0.15)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
            padding: "22px 20px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "14px",
              borderBottom: "1px solid rgba(200,140,160,0.1)",
            }}
          >
            <p style={{ fontSize: "0.68rem", color: "#6e5a5a" }}>
              Profile
            </p>

            <p style={{ fontSize: "1rem", color: "#e8d8dc", fontWeight: 600 }}>
              Niketha MS
            </p>

            <p style={{ fontSize: "0.78rem", color: "#a07888" }}>
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