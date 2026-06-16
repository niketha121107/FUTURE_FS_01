import { motion } from "framer-motion";

function Achievements() {
  return (
    <section
      id="achievements"
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
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f0e8e8] mb-4">
          Achievements & Certifications 🏆
        </h2>

        {/* CONNECTOR */}
        <p className="text-center text-[#a07888] mb-10 text-sm leading-relaxed">
          Built on initiative, resilience, and product curiosity — every step reflects
          consistent learning and real-world exploration 🚀
        </p>

        {/* ACHIEVEMENTS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all mb-6"
        >
          <span className="text-[#d4859a] font-semibold">🏆 Achievements</span>

          <p className="mt-3 text-[#a07888] text-sm">
            A journey shaped by initiative, resilience, and product curiosity 🚀
          </p>

          <div className="mt-5 space-y-4 text-[#c7b2b8] text-sm">

            <p>🚀 Participated in hackathons and coding challenges.</p>
            <p>🧠 Built multiple mini-projects using Python, React, and AI.</p>
            <p>🤝 Improved teamwork and collaboration skills.</p>
            <p>💡 Showcased initiative, resilience, and product curiosity.</p>

          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4859a]/40 transition-all"
        >
          <span className="text-[#d4859a] font-semibold">📜 Certifications</span>

          <p className="mt-3 text-[#c7b2b8] leading-relaxed">
            Earned certifications in Python programming, IoT fundamentals, Artificial Intelligence basics,
            and Claude 101. These certifications strengthened core programming knowledge and introduced
            practical AI concepts and modern development tools.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Achievements;