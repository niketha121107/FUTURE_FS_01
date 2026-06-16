import { motion } from "framer-motion";

function Mission() {
  return (
    <section
      id="value"
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

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Card */}
        <motion.div
          className="text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#f0e8e8]">
            Values
          </h2>

          <p className="text-[#a07888] text-lg mb-10">
            The purpose, principles, and aspirations that guide my journey.
          </p>

          {/* Vision */}
          <h3 className="text-2xl font-semibold text-[#f0e8e8] mb-4">
             Vision
          </h3>

          <p className="text-md md:text-lg text-[#a07888] leading-relaxed">
            I aspire to build a career at the intersection of Artificial
            Intelligence, Data Science, and Software Engineering, creating
            technology that delivers meaningful impact. My goal is to develop
            innovative, reliable, and user-centric solutions that address
            real-world challenges while continuously evolving as a professional
            and lifelong learner.
          </p>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-white/10 mx-auto my-10"></div>

          {/* Personal Manifesto */}
          <h3 className="text-2xl font-semibold text-[#f0e8e8] mb-4">
             Personal Manifesto
          </h3>

          <p className="text-md md:text-lg text-[#a07888] leading-relaxed">
            I believe excellence is achieved through continuous learning,
            disciplined effort, and a commitment to growth. I approach every
            challenge with curiosity, resilience, and a problem-solving mindset,
            viewing each experience as an opportunity to improve. Beyond
            acquiring technical skills, I strive to build solutions with
            purpose, integrity, and lasting value.
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          className="mt-8 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl italic text-[#d4b8c0] leading-relaxed">
            “Technology creates possibilities; purpose transforms them into
            impact.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;