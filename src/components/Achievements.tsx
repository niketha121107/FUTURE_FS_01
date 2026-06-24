import { motion } from "framer-motion";

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, var(--glow-1) 0%, var(--bg-primary) 55%),
          radial-gradient(ellipse at 80% 20%, var(--glow-2) 0%, transparent 60%)
        `,
      }}
    >
      <div
        className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] blur-[160px] rounded-full"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] blur-[160px] rounded-full"
        style={{ background: "var(--bg-hero-blob-2)" }}
      />

      <motion.div
        className="max-w-4xl w-full relative z-10 backdrop-blur-2xl rounded-3xl p-10 shadow-xl card-warm"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          borderWidth: "1px",
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Certifications 🏆
        </motion.h2>

        <p className="text-center mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Built on initiative, resilience, and product curiosity — every step reflects
          consistent learning and real-world exploration 🚀
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl card-accent-border card-glow-hover mb-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            borderWidth: "1px",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--accent)" }}>🏆 Achievements</span>

          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            A journey shaped by initiative, resilience, and product curiosity 🚀
          </p>

          <div className="mt-5 space-y-4 text-sm" style={{ color: "var(--text-card-body)" }}>

            <p>🚀 Participated in hackathons and coding challenges.</p>
            <p>🧠 Built multiple mini-projects using Python, React, and AI.</p>
            <p>🤝 Improved teamwork and collaboration skills.</p>
            <p>💡 Showcased initiative, resilience, and product curiosity.</p>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl card-accent-border card-glow-hover"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            borderWidth: "1px",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--accent)" }}>📜 Certifications</span>

          <p className="mt-3 leading-relaxed" style={{ color: "var(--text-card-body)" }}>
            Earned certifications in Python programming, IoT fundamentals, Artificial Intelligence basics,
            and Claude 101. These certifications strengthened core programming knowledge and introduced
            practical AI concepts and modern development tools.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Achievements;
