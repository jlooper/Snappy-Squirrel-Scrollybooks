'use client';
import { useEffect, useRef, useState } from 'react';

type Section = {
  id: number;
  content: string;
  imageUrl?: string;
  header: string;
};

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  

  const goToNextSection = () => {
    if (activeSection < sections.length - 1) {
      sectionsRef.current[activeSection + 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousSection = () => {
    if (activeSection > 0) {
      sectionsRef.current[activeSection - 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections: Section[] = [
    {
      id: 1,
      header: "Snappy and the Nuts",
      content: "Snappy was a busy, happy squirrel.  All day long in the fall he searched through the leaves on the forest floor for tasty nuts to store for the long winter.  He squeaked with excitement each time he found a nut and quickly buried it where he was sure he’d find it in the coming months.  He had to hide them because other animals wanted to eat them, too.",
      imageUrl: "/1.png",
    },
    {
      id: 2,
      header: "The Nuts",
      content: "Sometimes the Deer brothers trampled them and broke the nut shells. Often the naughty Chipmunk family stole them. Sometimes, Snappy couldn’t quite remember where he put the piles of nuts.  Snappy had been working for a long time and had saved many nuts.  They would taste so good all winter when the ground is covered with snow.",
      imageUrl: "/1.png",
    },
    {
      id: 3,
      header: "Auntie Pip",
      content: "Snappy thought for a long time about the best place to store them safely where no one could break or steal the nuts. Finally he smiled happily, thinking: “I'll ask Auntie Pip. She knows all kinds of interesting things.”",
      imageUrl: "/1.png",
    },
    {
      id: 4,
      header: "Owl's Forest Bank",
      content: "Auntie Pip told Snappy that the forest has lots of good places to store his property. “If you want them back within the next year or so, they'll have to be where we can find them easily but will be held safe from other Forest creatures.”",
      imageUrl: "/1.png",
    },
    {
      id: 5,
      header: "A Safe Box",
      content: "“I'd suggest Owl's Forest Bank. You can put them in his safe box where he can watch them all the time. Lots of animals store their things with Owl. He is awake all night and during the day he has several salamanders who watch what is held in the bank.”",
      imageUrl: "/1.png",
    },
    {
      id: 6,
      header: "Mr. Fox",
      content: "Mr. Fox, who always seemed interested in other peoples’ business, ambled over to Snappy and Auntie Pip. “I have a bank as well, much better than Owl’s. It’s called ‘Fox’s Friends’ Bank.’ I will give you three pine nuts for every acorn that you deposit in my bank.”",
      imageUrl: "/1.png",
    }
  ];


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          const index = sectionsRef.current.findIndex(
            (section) => section === entry.target
          );
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '-10% 0px -10% 0px'
    }
  );

  sectionsRef.current.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  const renderSection = (section: Section, index: number) => {
   
        return (
          <div className="space-y-3">
          <h2 className="text-5xl font-bold">{section.header}</h2>
           <div className="aspect-video rounded-lg overflow-hidden">
              {section.imageUrl && (
                <img 
                  src={section.imageUrl} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="text-3xl space-x-6">{section.content}</p>
          </div>
        );

      
    
  };

  return (
    <div className="relative min-h-screen">
      {/* Background SVG */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/background.svg)' }}
      />

      {/* Sticky Header with arrows */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-900 shadow-lg p-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-white font-bold text-3xl">Snappy and the Nuts</h1>
            
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPreviousSection}
                disabled={activeSection === 0}
                className={`p-2 rounded-full transition-all duration-300 
                  ${activeSection === 0 
                    ? 'text-emerald-200 cursor-not-allowed' 
                    : 'text-white hover:bg-emerald-600'
                  }`}
                aria-label="Previous section"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 19.5L8.25 12l7.5-7.5" 
                  />
                </svg>
              </button>

              {/* Optional: Section indicator */}
              <span className="text-white font-medium">
                {activeSection + 1} / {sections.length}
              </span>

              <button
                onClick={goToNextSection}
                disabled={activeSection === sections.length - 1}
                className={`p-2 rounded-full transition-all duration-300 
                  ${activeSection === sections.length - 1 
                    ? 'text-emerald-200 cursor-not-allowed' 
                    : 'text-white hover:bg-emerald-600'
                  }`}
                aria-label="Next section"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main scrolling content area */}
      <main className="relative w-full pt-32 z-10">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionsRef.current[index] = el!)}
            className="min-h-screen py-16 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="sticky pt-20 w-full max-w-4xl mx-auto px-8">
              {renderSection(section, index)}
            </div>
          </section>
        ))}
      </main>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ 
            width: `${(activeSection / (sections.length - 1)) * 100}%` 
          }}
        />
      </div>
    </div>
  );
}
