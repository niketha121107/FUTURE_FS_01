import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  const links = ["About", "Value", "Skills", "Education", "Projects", "Achievements", "Blog", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      setScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionEls = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }} />

      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 border-b transition-all duration-300"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="w-full transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "var(--bg-navbar-scrolled)" : "var(--bg-navbar)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-wide" style={{ color: "var(--text-primary)" }}>
              Niketha <span className="sparkle-icon">✨</span>
            </h1>

            <div className="flex items-center gap-4">
              <ul className="hidden md:flex gap-8 font-medium" style={{ color: "var(--text-muted)" }}>
                {links.map((item) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item}>
                      <a
                        href={`#${sectionId}`}
                        className="relative transition-all duration-300"
                        style={{
                          color: isActive ? "var(--accent)" : "inherit",
                        }}
                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--accent)"; }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = ""; }}
                      >
                        {item}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                            style={{ background: "var(--accent)" }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ color: "var(--text-secondary)", background: "var(--accent-btn-bg)" }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              <button
                className="md:hidden text-2xl"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 transition"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.backgroundColor = "var(--bg-card)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ""; e.currentTarget.style.backgroundColor = ""; }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
