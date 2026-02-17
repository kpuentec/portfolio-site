import { useEffect } from "react";

export const MobileMenu = ({ menu, setMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-40
      flex flex-col items-center justify-center
      transition-opacity duration-300
      ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenu(false)}
        className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex flex-col items-center font-mono space-y-6">
        <a
          href="#home"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          About
        </a>

        <a
          href="#experience"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Experience
        </a>

        <a
          href="#projects"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
