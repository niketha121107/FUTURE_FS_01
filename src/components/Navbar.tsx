import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Value", "Skills", "Education", "Projects", "Achievements", "Blog", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a1f]/80 backdrop-blur-xl border-b border-white/10 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <h1 className="text-2xl font-extrabold tracking-wide text-[#f0e8e8]">
          Niketha ✨
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 ml-auto text-[#a07888] font-medium">

          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  hover:text-[#d4859a]
                  transition-all duration-300
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-[#d4859a]
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl text-[#f0e8e8]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e1825] border-t border-white/10">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 text-[#a07888] hover:text-[#d4859a] hover:bg-white/5 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;