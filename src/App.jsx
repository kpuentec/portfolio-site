import { use, useState } from "react";
import {Loading} from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menu, setMenu] = useState(false);


  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}{' '}
        <div className={`min-h-screen transition-opacitiy duration-800 
          ${isLoaded ? "opacity-100" : 'opacity-0'} bg-black text-white`}>

            <Navbar menu={menu} setMenu={setMenu} />
            <MobileMenu menu={menu} setMenu={setMenu} />
          
        </div>
    </>
  )
}

export default App
