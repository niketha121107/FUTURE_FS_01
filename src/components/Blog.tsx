import { motion } from "framer-motion";

function Blog() {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* Main Card */}
      <motion.div
        className="max-w-4xl w-full relative z-10 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* MAIN STORY TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f0e8e8] mb-4">
          From Learning to Building
        </h2>

        {/* 🔗 GLOBAL CONTINUATION (IMPORTANT FIX) */}
        <p className="text-center text-[#a07888] mb-10 leading-relaxed">
          What started as curiosity in school slowly evolved into a passion for technology,
          leading step by step into learning, building, and growing in real-world projects 🚀
        </p>

        {/* INTRO BLOCK */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all mb-6"
        >
          <span className="text-[#d4859a] font-semibold">
            ✨ Where It All Started
          </span>
          <p className="mt-2 text-[#c7b2b8]">
            During school days, curiosity sparked about how apps and websites actually work behind the scenes.
          </p>
        </motion.div>

        {/* 🔗 CONTINUATION LINE (FIXES GAP BETWEEN BLOCKS) */}
        <p className="text-center text-[#a07888] mb-8 text-sm">
          That curiosity became the foundation for everything that followed 👇
        </p>

        {/* Content Blocks */}
        <div className="space-y-8 text-[#c7b2b8] leading-relaxed text-md md:text-lg">

          <motion.div whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all"
          >
            <span className="text-[#d4859a] font-semibold">📌 Learning Phase</span>
            <p className="mt-2">
              Started with curiosity in AI & Data Science, building strong fundamentals in programming,
              problem solving, and logical thinking.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all"
          >
            <span className="text-[#d4859a] font-semibold">🚀 Hackathons & Projects</span>
            <p className="mt-2">
              Participated in hackathons and built multiple projects that strengthened teamwork,
              creativity, and real-world problem solving skills.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all"
          >
            <span className="text-[#d4859a] font-semibold">💼 Internship Experience</span>
            <p className="mt-2">
              Gained real-world exposure through internship, learning industry workflows,
              collaboration, and practical software development.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all"
          >
            <span className="text-[#d4859a] font-semibold">🌱 Continuous Growth</span>
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