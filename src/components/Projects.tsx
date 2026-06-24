import { useCallback, useState } from "react";
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
      title: "Leaf & Bloom Home Nursery",
      tech: "Python • Database Management • React",
      description:
        "A web application for a home nursery that allows users to browse plants, manage orders, and view care instructions.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="projects"
      className="relative px-6 py-20 overflow-hidden"
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

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 pt-10"
        style={{ color: "var(--text-primary)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} variants={cardVariants} />
        ))}
      </motion.div>
    </section>
  );
}

interface Project {
  title: string;
  tech: string;
  description: string;
}

function ProjectCard({
  project,
  variants,
}: {
  project: Project;
  variants: any;
}) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      className="relative group flex flex-col backdrop-blur-2xl rounded-2xl p-6 overflow-hidden card-warm card-glow-hover"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        borderWidth: "1px",
        boxShadow: "var(--shadow-skills)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, var(--accent-glow), transparent 60%)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "inset 0 0 0 1px var(--accent-border)",
        }}
      />

      <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
        {project.title}
      </h3>

      <p className="text-sm mb-3 font-medium tracking-wide" style={{ color: "var(--text-secondary)" }}>
        {project.tech}
      </p>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div
        className="mt-auto pt-5 text-xs font-medium inline-flex items-center gap-1.5 group/link"
        style={{
          color: "var(--text-dim)",
          borderTop: "1px solid var(--border-light)",
        }}
      >
        🚀 Project Showcase
        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
          →
        </span>
      </div>
    </motion.div>
  );
}

export default Projects;
