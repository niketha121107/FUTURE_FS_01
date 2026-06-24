import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaPython, FaCss3Alt } from "react-icons/fa";

import {
  SiC,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython size={42} />, level: "strong" },
    { name: "C Programming", icon: <SiC size={42} />, level: "strong" },
    { name: "JavaScript", icon: <SiJavascript size={42} />, level: "learning" },
    { name: "TypeScript", icon: <SiTypescript size={42} />, level: "learning" },
    { name: "React", icon: <SiReact size={42} />, level: "learning" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={42} />, level: "learning" },
    { name: "HTML", icon: <SiHtml5 size={42} />, level: "learning" },
    { name: "CSS", icon: <FaCss3Alt size={42} />, level: "learning" },
    { name: "Git & GitHub", icon: <SiGit size={42} />, level: "learning" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -300 : 300;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 relative overflow-hidden flex flex-col justify-center"
      style={{
        color: "var(--text-primary)",
        background: `
          radial-gradient(ellipse at 20% 50%, var(--glow-1) 0%, var(--bg-primary) 55%),
          radial-gradient(ellipse at 80% 20%, var(--glow-2) 0%, transparent 60%)
        `,
      }}
    >
      <div
        className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] blur-[180px] rounded-full"
        style={{ background: "var(--bg-hero-blob-1)" }}
      />
      <div
        className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] blur-[180px] rounded-full"
        style={{ background: "var(--bg-hero-blob-2)" }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--text-primary)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="relative max-w-6xl mx-auto w-full">
        {canScrollLeft && <div className="scroll-fade-left" />}
        {canScrollRight && <div className="scroll-fade-right" />}

        {canScrollLeft && (
          <button
            className="scroll-arrow scroll-arrow-left"
            onClick={() => scrollBy("left")}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            className="scroll-arrow scroll-arrow-right"
            onClick={() => scrollBy("right")}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}

        <div ref={scrollRef} className="scroll-container px-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="scroll-snap-item relative group flex flex-col items-center justify-between backdrop-blur-xl rounded-2xl p-8 text-center transition-shadow duration-300 min-h-[240px] w-[200px] card-warm card-glow-hover"
              style={{
                background: "linear-gradient(to bottom, var(--bg-card-start), var(--bg-card-end))",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-skills)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 50% 30%, var(--accent-glow), transparent 70%)",
                }}
              />

              <div
                className="flex justify-center mt-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "var(--accent)" }}
              >
                <div className="scale-[1.3]">{skill.icon}</div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-profile-name)" }}>
                  {skill.name}
                </h3>

                <div
                  className={`
                    inline-block px-3 py-1 text-xs rounded-full font-medium tracking-wide
                    ${
                      skill.level === "strong"
                        ? "bg-green-500/20 border border-green-500/20"
                        : "bg-yellow-500/20 border border-yellow-500/20"
                    }
                  `}
                  style={{
                    color: skill.level === "strong" ? "var(--badge-strong-text)" : "var(--badge-learning-text)",
                  }}
                >
                  {skill.level === "strong" ? "Strong" : "Learning"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
