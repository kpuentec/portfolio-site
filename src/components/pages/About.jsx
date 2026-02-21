export const About = () => {

  const frontendSkills = ["React", "HTML/CSS", "JavaScript", "TailwindCSS", "TypeScript", "Vue"];
  const backendSkills = ["Python", "Node.js", "MongoDB", "Express.js", "SQL", "Java"];
  const cybersecuritySkills = ["SIEM", "Log Analysis", "Incident Response", "Splunk", "MITRE ATT&CK Framework"];
  const systemSkills = ["Windows", "Linux", "MacOS", "AWS", "Azure", "Bash" , "System Configuration"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#0b0f14]">
      <div className="max-w-3xl mx-auto px-4">


        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 transition-all">

          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-center leading-relaxed">
            I am a computer science student interested in development, security, and cloud systems.
            I enjoy building practical applications that solve real problems, from designing secure APIs
            to analyzing logs and deploying services. I focus on writing clean, maintainable code and
            understanding how systems work end to end. I am continually improving my technical skills
            while strengthening communication and collaboration in team environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-gray-100">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-gray-100">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(20,158,147,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-gray-100">
                Cybersecurity
              </h3>
              <div className="flex flex-wrap gap-2">
                {cybersecuritySkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-gray-100">
                Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {systemSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-400 py-1 px-3 rounded-full text-sm 
                    hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(20,158,147,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
