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
      
      <div className="text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1 text-teal-400">|</span>
      </div>

    </div>
  );
};