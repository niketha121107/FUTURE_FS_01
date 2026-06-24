import { motion } from "framer-motion";

function About() {
  const tagVariants = {
    hidden: { opacity: 0, y: 15 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
  };

  const tags = [
    "AI & Data Science", "Python", "C Programming", "React",
    "TypeScript", "Data Structures", "Artificial Intelligence",
  ];

  return (
    <section
      id="about"
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
        className="max-w-4xl text-center backdrop-blur-2xl rounded-3xl p-10 shadow-xl card-warm card-glow-hover"
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
          About Me
        </motion.h2>

        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Hey I’m{" "}
          <span className="font-semibold" style={{ color: "var(--accent)" }}>Niketha</span>, an
          aspiring AI & Data Science engineer with a strong passion for
          building intelligent and impactful tech solutions.
        </p>

        <p className="text-md md:text-lg mt-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          My foundation in Mathematics and Biology stream during my HSLC helped me develop
          analytical thinking and curiosity, which naturally evolved into a
          deep interest in technology and problem-solving.
        </p>

        <p className="text-md md:text-lg mt-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Currently, I’m building my skills in Python, C Programming, React,
          TypeScript, Data Structures, and Artificial Intelligence through
          consistent hands-on practice and project-based learning.
        </p>

        <p className="text-md md:text-lg mt-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          I enjoy turning ideas into functional and meaningful applications
          that strengthen both my technical expertise and creativity while
          solving real-world challenges.
        </p>

        <p className="text-md md:text-lg mt-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          AI fascinates me because it blends logic, innovation, and impact —
          creating opportunities to build solutions that can make a difference.
        </p>

        <p className="mt-8 text-base md:text-lg font-medium tracking-wide" style={{ color: "var(--text-secondary)" }}>
          💡 Driven by curiosity. Built with consistency. Focused on impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              custom={i}
              variants={tagVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                borderWidth: "1px",
                color: "var(--text-secondary)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
