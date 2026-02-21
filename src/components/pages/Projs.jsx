export const Projs = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#0b0f14]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 
            hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-mono font-bold mb-2 text-gray-100">
                Intern Review API
              </h3>

              <p className="text-gray-200 mb-4">
                Secure RESTful backend API for internship reviews with JWT-based authentication and role-aware access control. 
                Includes full CRUD functionality with ownership enforcement, protected middleware routes, filtering, 
                pagination, and indexed queries for scalable data retrieval.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express", "MongoDB", "JWT", "Mongoose"].map((tech, key) => (
                  <span key={key} className="bg-teal-500/10 text-teal-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.15)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a 
                href="https://github.com/kpuentec/intern-review-api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors my-4"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 
            hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-mono font-bold mb-2 text-gray-100">
                AI-Powered Cyber Threat Reporter
              </h3>
              <p className="text-gray-200 mb-4">
                AI-driven web application that analyzes logs and URLs to generate structured threat summaries 
                with actionable remediation steps. Integrated Gemini API for automated analysis using Pydantic 
                models and built an interactive frontend to display real-time threat intelligence results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "FastAPI", "Streamlit", "MongoDB", "Gemini API"].map((tech, key) => (
                  <span key={key} className="bg-teal-500/10 text-teal-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.15)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a 
                href="https://github.com/kpuentec/ai-threat-reporter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors my-4"
              >
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};