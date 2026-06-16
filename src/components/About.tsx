import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* Soft Glow Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* Glass Card */}
      <motion.div
        className="max-w-4xl text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#f0e8e8]">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-[#d4b8c0]">
          Hey I’m{" "}
          <span className="font-semibold text-[#d4859a]">Niketha</span>, an
          aspiring AI & Data Science engineer with a strong passion for
          building intelligent and impactful tech solutions.
        </p>

        {/* Background */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          My foundation in Mathematics and Biology stream dusing my HSLC helped me develop
          analytical thinking and curiosity, which naturally evolved into a
          deep interest in technology and problem-solving.
        </p>

        {/* Current Learning */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          Currently, I’m building my skills in Python, C Programming, React,
          TypeScript, Data Structures, and Artificial Intelligence through
          consistent hands-on practice and project-based learning.
        </p>

        {/* Passion */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          I enjoy turning ideas into functional and meaningful applications
          that strengthen both my technical expertise and creativity while
          solving real-world challenges.
        </p>

        {/* AI Interest */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          AI fascinates me because it blends logic, innovation, and impact —
          creating opportunities to build solutions that can make a difference.
        </p>

        {/* Personal Motto */}
        <p className="mt-8 text-base md:text-lg font-medium text-[#d4b8c0] tracking-wide">
          💡 Driven by curiosity. Built with consistency. Focused on impact.
        </p>

        {/* Skills Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            AI & Data Science
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            Python
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            C Programming
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            React
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            TypeScript
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            Data Structures
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            Artificial Intelligence
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;