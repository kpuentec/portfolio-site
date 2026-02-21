export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#0b0f14]"
    >
      <div className="text-center z-10 px-4">

        <h1 className="text-5xl md:text-5xl font-bold font-mono mb-6">
          <span className="text-gray-100">
            Hi, I'm{" "}
          </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Kevin
          </span>
        </h1>

        <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
          A cybersecurity-focused programmer
          and software engineering student from Maryland.
        </p>

        <div className="flex justify-center space-x-4">

          <a
            href="#projects"
            className="bg-emerald-500 text-white py-3 px-6 rounded font-medium transition
            hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-emerald-500/40 text-emerald-400 
            py-3 px-6 rounded font-medium transition-all duration-200
            hover:-translate-y-0.5 
            hover:bg-emerald-500/10 
            hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
};
