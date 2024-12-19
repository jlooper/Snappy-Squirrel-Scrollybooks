// components/LadyBug.tsx
'use client';
import { useState } from 'react';

interface LadyBugProps {
  funFact?: string;
}

export default function LadyBug({ funFact = "Fun fact about this section!" }: LadyBugProps) {
  const [isActive, setIsActive] = useState(false);

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
          className="relative animate-popIn border-2 shadow-md rounded z-10 p-4 mt-3 speech-bubble bg-yellow-500"
        >
          <button 
            onClick={() => setIsActive(false)}
            className="absolute top-1 right-1 w-5 h-5 text-gray-500 hover:text-gray-700"
            aria-label="Close fun fact window"
          >
            ×
          </button>
          <p className="text-lg pr-4">{funFact}</p>
          
        </div>
      )}
    </div>
  );
}
