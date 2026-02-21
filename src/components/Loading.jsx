import { useEffect, useState } from "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = "Welcome";

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, idx));
      idx++;

      if (idx > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
      
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1 text-teal-400">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-teal-500 shadow-[0_0_15px_rgba(14,165,233,0.4)] animate-loading-bar"></div>
      </div>

    </div>
  );
};
