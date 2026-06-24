import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="relative py-10 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          backgroundColor: "var(--bg-footer)",
          borderTop: "1px solid var(--border)",
        }}
      />

      <div
        className="absolute top-0 left-10 w-72 h-72 blur-[160px] rounded-full"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="absolute bottom-0 right-10 w-72 h-72 blur-[160px] rounded-full"
        style={{ background: "var(--bg-hero-blob-2)" }}
      />

      <div className="relative z-10">
        <p className="text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
          © 2026{" "}
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
            Niketha MS
          </span>{" "}
          | Built with{" "}
          <span className="font-medium" style={{ color: "var(--accent-secondary)" }}>React ⚛️</span>,{" "}
          <span className="font-medium" style={{ color: "var(--accent-secondary)" }}>TypeScript</span> &{" "}
          <span className="font-medium" style={{ color: "var(--accent-secondary)" }}>Tailwind CSS</span> 🚀
        </p>

        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          Designed with passion ✨ for AI & Web Development
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
