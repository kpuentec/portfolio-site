export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-[#0b0f14]">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-mono font-bold mb-4 text-gray-100">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>
                  <strong>B.S. Computer Science</strong>, University of Maryland, College Park <span className="text-gray-400">(September 2023 – Expected May 2027)</span>
              </li>
              <li>
                Relevant Coursework:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-200">
                  <ul>- Algorithms</ul>
                  <ul>- Organization of Programming Languages</ul>
                  <ul>- Object-Oriented Programming I + II</ul>
                  <ul>- Intro to Computer Systems</ul>
                </ul>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-mono font-bold mb-4 text-gray-100">
              Work Experience
            </h3>
            <div className="space-y-4 text-gray-200">
              <div>
                <h4 className="font-semibold text-gray-100">
                  CodePath Tech Fellow <span className="text-gray-400">(February 2026 – Present)</span>
                </h4>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <ul>- Organized and led student workshops to teach cybersecurity fundamentals and best practices.</ul>
                  <ul>- Facilitated breakout sessions and supported students in hands on labs covering Linux, networking, SIEM tools, and incident response.</ul>
                  <ul>- Reinforced Blue Team concepts and threat detection using structured frameworks and real world security scenarios.</ul>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-mono font-bold mb-4 text-gray-100">
              Organizations
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>CodePath Remote Member (2025)</li>
                <ul>
                    - CYB 102 : Blue Team operations, endpoint/network monitoring, and incident response using MITRE ATT&CK.
                </ul>
                <ul>
                    - TIP 102 : Algorithmic challenges, object-oriented design, and technical problem-solving exercises.
                </ul>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-mono font-bold mb-4 text-gray-100">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>CompTIA A+</li>
              <li>CompTIA Network+</li>
              <li>CompTIA Security+</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
