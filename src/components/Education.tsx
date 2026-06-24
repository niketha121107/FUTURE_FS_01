import { motion } from "framer-motion";

function Education() {
  const timeline = [
    {
      year: "2025 - 2029",
      title: "B.Tech - Artificial Intelligence & Data Science",
      place: "Karunya Institute of Science and Technology, Coimbatore",
      desc: "Currently pursuing undergraduate degree focusing on AI, Data Science, Machine Learning, and Software Development.",
    },
    {
      year: "Higher Secondary Education",
      title: "Biology & Mathematics Stream",
      place: "Avila Convent Matriculation Higher Secondary School",
      desc: "Completed higher secondary education with strong foundation in Biology and Mathematics.",
    },
    {
      year: "Secondary Education",
      title: "SSLC",
      place: "Avila Convent Matriculation School",
      desc: "Completed secondary schooling with overall academic excellence and early interest in science.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20 flex items-center justify-center relative overflow-hidden"
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

      <div className="max-w-4xl w-full">

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education Journey 🎓
        </motion.h2>

        <motion.div
          className="relative ml-4"
          style={{ borderLeft: "1px solid var(--border)" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8 relative"
              variants={itemVariants}
            >
              <div
                className="absolute w-4 h-4 rounded-full -left-10 mt-2"
                style={{
                  backgroundColor: "var(--accent)",
                  boxShadow: "0 0 15px var(--accent-glow)",
                }}
              />

              <div
                className="backdrop-blur-2xl p-6 rounded-2xl card-hover-shadow card-warm"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  borderWidth: "1px",
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-1" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>

                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  📍 {item.place}
                </p>

                <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
