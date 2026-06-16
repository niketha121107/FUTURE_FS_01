import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "EduTwin",
      tech: "React • TypeScript • Tailwind CSS",
      description:
        "Educational platform designed to enhance learning experience with an interactive and responsive interface.",
    },
    {
      title: "Athelatica",
      tech: "Python • AI",
      description:
        "Sports ecosystem platform connecting athletes, coaches, academics, turf owners, clinics, sports associations and communities.",
    },
    {
      title: "Animal Intrusion Detection",
      tech: "Machine Learning • Python • IoT",
      description:
        "Smart system that detects animal movement and triggers real-time alerts using ML models.",
    },
    {
      title: "Smart Light Control System",
      tech: "IoT",
      description:
        "Energy-efficient automation system for intelligent lighting control.",
    },
    {
      title: "AI Dialect Translator",
      tech: "AI • NLP • Python",
      description:
        "Translates speech and text across multiple languages using AI.",
    },
    {
      title: "Client Lead Management System",
      tech: "Python • Database Management",
      description:
        "A web based CRM application that helps businesses manage and track client interactions and leads effectively.",
    },
    {
      title: "Business Website",
      tech: "Python • AI • React",
      description:
        "A live website for a business that showcases its services, products, and contact information.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 relative overflow-hidden flex flex-col justify-center"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#f0e8e8]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              backdrop-blur-2xl
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              shadow-lg
              hover:shadow-[0_0_25px_rgba(180,100,120,0.25)]
              transition-all
              duration-300
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-[#f0e8e8] mb-2">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-sm text-[#d4b8c0] mb-3">
              {project.tech}
            </p>

            {/* Description */}
            <p className="text-sm text-[#a07888] leading-relaxed">
              {project.description}
            </p>

            {/* Footer */}
            <div className="mt-5 text-xs text-[#8a7070] font-medium">
              🚀 Project Showcase
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;