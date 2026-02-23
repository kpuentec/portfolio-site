import { useEffect } from "react";

export const Navbar = ({ menu, setMenu }) => {
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.70)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <a href="#home" className="font-mono text-xl font-bold text-white">
            <span className="text-emerald-400">Kevin</span> Cortez
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-400 hover:text-teal-400 transition-colors"
            onClick={() => setMenu((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center font-mono space-x-8">
            <a
              href="#home"
              className="text-gray-200 hover:text-teal-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-200 hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
