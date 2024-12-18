// components/LadyBug.tsx
'use client';
import { useState } from 'react';

interface LadyBugProps {
  funFact?: string;
}

export default function LadyBug({ funFact = "Fun fact about this section!" }: LadyBugProps) {
  const [isActive, setIsActive] = useState(false);

  const speechBubbleStyle = {
    position: 'relative',
    border: '1px solid gray',
    borderRadius: '15px',
    padding: '1em',
    marginTop: '1em',
    animation: 'popIn 0.3s ease-out',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    zIndex: 10,
  } as const;

  return (
    <div className="pt-10">
        Click the ladybug!
      <span 
        role="button"
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer text-2xl hover:scale-110 transition-transform"
        aria-label="Show fun fact window"
      >
        🐞
      </span>
      {isActive && (
        <div 
          style={speechBubbleStyle}
          className="speech-bubble bg-yellow-500"
        >
          <button 
            onClick={() => setIsActive(false)}
            className="absolute top-1 right-1 w-5 h-5 text-gray-500 hover:text-gray-700"
            aria-label="Close fun fact window"
          >
            ×
          </button>
          <p className="text-lg pr-4">{funFact}</p>
          <style jsx>{`
            @keyframes popIn {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
