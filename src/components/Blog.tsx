import { motion } from "framer-motion";

function Blog() {
  return (
    <section
      id="blog"
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
          From Learning to Building
        </motion.h2>

        <p className="text-center mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          What started as curiosity in school slowly evolved into a passion for technology,
          leading step by step into learning, building, and growing in real-world projects 🚀
        </p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl card-accent-border card-glow-hover mb-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            borderWidth: "1px",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--accent)" }}>
            ✨ Where It All Started
          </span>
          <p className="mt-2" style={{ color: "var(--text-card-body)" }}>
            During school days, curiosity sparked about how apps and websites actually work behind the scenes.
          </p>
        </motion.div>

        <p className="text-center mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          That curiosity became the foundation for everything that followed 👇
        </p>

        <div className="space-y-8 leading-relaxed text-md md:text-lg" style={{ color: "var(--text-card-body)" }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl card-accent-border card-glow-hover"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              borderWidth: "1px",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--accent)" }}>📌 Learning Phase</span>
            <p className="mt-2">
              Started with curiosity in AI & Data Science, building strong fundamentals in programming,
              problem solving, and logical thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl card-accent-border card-glow-hover"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              borderWidth: "1px",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--accent)" }}>🚀 Hackathons & Projects</span>
            <p className="mt-2">
              Participated in hackathons and built multiple projects that strengthened teamwork,
              creativity, and real-world problem solving skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl card-accent-border card-glow-hover"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              borderWidth: "1px",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--accent)" }}>💼 Internship Experience</span>
            <p className="mt-2">
              Gained real-world exposure through internship, learning industry workflows,
              collaboration, and practical software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl card-accent-border card-glow-hover"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              borderWidth: "1px",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--accent)" }}>🌱 Continuous Growth</span>
            <p className="mt-2">
              Constantly improving skills in Python, React, TypeScript, AI, and Data Structures
              through hands-on projects and exploration.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Blog;
