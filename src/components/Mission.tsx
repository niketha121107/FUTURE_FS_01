import { motion } from "framer-motion";

function Mission() {
  return (
    <section
      id="value"
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

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          className="text-center backdrop-blur-2xl rounded-3xl p-10 shadow-xl card-warm card-glow-hover"
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
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Values
          </motion.h2>

          <p className="text-lg mb-10" style={{ color: "var(--text-muted)" }}>
            The purpose, principles, and aspirations that guide my journey.
          </p>

          <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Vision
          </h3>

          <p className="text-md md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I aspire to build a career at the intersection of Artificial
            Intelligence, Data Science, and Software Engineering, creating
            technology that delivers meaningful impact. My goal is to develop
            innovative, reliable, and user-centric solutions that address
            real-world challenges while continuously evolving as a professional
            and lifelong learner.
          </p>

          <div className="w-24 h-px mx-auto my-10" style={{ backgroundColor: "var(--border)" }} />

          <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Personal Manifesto
          </h3>

          <p className="text-md md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I believe excellence is achieved through continuous learning,
            disciplined effort, and a commitment to growth. I approach every
            challenge with curiosity, resilience, and a problem-solving mindset,
            viewing each experience as an opportunity to improve. Beyond
            acquiring technical skills, I strive to build solutions with
            purpose, integrity, and lasting value.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 backdrop-blur-2xl rounded-3xl p-8 text-center shadow-xl card-warm card-glow-hover"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            borderWidth: "1px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            “Technology creates possibilities; purpose transforms them into
            impact.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;
