import { useState } from "react";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Experience } from "./components/pages/Experience";
import { Projs } from "./components/pages/Projs";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-1000 ease-out 
          ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#0f172a] text-white`}
      >
        <Navbar menu={menu} setMenu={setMenu} />
        <MobileMenu menu={menu} setMenu={setMenu} />

        <Home />
        <About />
        <Experience />
        <Projs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
