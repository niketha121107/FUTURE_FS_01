import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* soft glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* 💎 Glass Card */}
      <motion.div
        className="w-full max-w-2xl text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f0e8e8]">
          Contact Me
        </h2>

        <p className="text-[#a07888] mb-10">
          Let’s connect — open for collaboration, learning & opportunities 🚀
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-10 text-4xl mb-10">

          <a
            href="https://github.com/niketha121107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4b8c0] hover:text-[#d4859a] transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/niketha-ms-1a5262379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4b8c0] hover:text-[#d4859a] transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:msniketha1211@gmail.com"
            className="text-[#d4b8c0] hover:text-[#d4859a] transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* LINKS */}
        <div className="space-y-3 text-sm md:text-base text-[#a07888] mb-6">

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/niketha121107"
              target="_blank"
              className="text-[#d4859a] font-medium hover:underline"
            >
              github.com/niketha121107
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/niketha-ms-1a5262379"
              target="_blank"
              className="text-[#d4859a] font-medium hover:underline"
            >
              linkedin.com/in/niketha-ms
            </a>
          </p>

          <p>
            📧 Email:{" "}
            <span className="text-[#d4859a] font-medium">
              msniketha1211@gmail.com
            </span>
          </p>

        </div>

        {/* RESUME BUTTON */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <a
            href="#resume"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium text-[#fff0f3] transition duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(212,133,154,0.3) 0%, rgba(192,116,138,0.2) 100%)",
              border: "1px solid rgba(212,133,154,0.5)",
            }}
          >
            📄 View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;