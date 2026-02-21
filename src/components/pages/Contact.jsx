import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_S_ID,
        import.meta.env.VITE_T_ID,
        e.target,
        import.meta.env.VITE_PUB_KEY
      )
      .then(() => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-[#0b0f14]">
      <div className="px-4 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex flex-col items-center">
            <form className="space-y-6 max-w-xs w-full" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-200 transition 
                    focus:outline-none focus:border-teal-400 focus:bg-teal-400/5"
                  placeholder="Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-200 transition 
                    focus:outline-none focus:border-teal-400 focus:bg-teal-400/5"
                  placeholder="Example@email.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-200 transition 
                    focus:outline-none focus:border-teal-400 focus:bg-teal-400/5"
                  placeholder="Type your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition 
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center space-y-3">


            <div className="max-w-xs w-full p-6 rounded-xl border-white/10 border hover:-translate-y-1 
              hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">LinkedIn</h3>
              <p className="text-gray-200 mb-4">
                Connect with me professionally.
              </p>
              <a
                href="https://linkedin.com/in/kpcortez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                View Profile
              </a>
            </div>

            <div className="max-w-xs w-full rounded-xl border-white/10 border hover:-translate-y-1 
              hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition-all p-3 flex justify-center">
              <a
                href="https://discord.com/users/783415080926445630"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lanyard.cnrad.dev/api/783415080926445630?theme=dark&bg=0f172a&borderRadius=20px&animated=true&showDisplayName=true"
                  alt="Discord Presence"
                  className="rounded-lg"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
