import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
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
        className="w-full max-w-2xl text-center backdrop-blur-2xl rounded-3xl p-10 shadow-xl card-warm card-glow-hover"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          borderWidth: "1px",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <p className="mb-10" style={{ color: "var(--text-muted)" }}>
          Let’s connect — open for collaboration, learning & opportunities 🚀
        </p>

        <div className="flex justify-center gap-10 text-4xl mb-10">
          <a
            href="https://github.com/niketha121107"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/niketha-ms-1a5262379"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:msniketha1211@gmail.com"
            className="transition duration-300"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="space-y-3 text-sm md:text-base mb-6" style={{ color: "var(--text-muted)" }}>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/niketha121107"
              target="_blank"
              className="font-medium hover:underline"
              style={{ color: "var(--accent)" }}
            >
              github.com/niketha121107
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/niketha-ms-1a5262379"
              target="_blank"
              className="font-medium hover:underline"
              style={{ color: "var(--accent)" }}
            >
              linkedin.com/in/niketha-ms
            </a>
          </p>

          <p>
            📧 Email:{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>
              msniketha1211@gmail.com
            </span>
          </p>
        </div>

        <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }} />
      </motion.div>
    </section>
  );
}

export default Contact;
