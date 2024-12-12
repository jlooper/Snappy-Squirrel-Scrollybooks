'use client';
import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Image from 'next/image';

type Section = {
  id: number;
  content: string;
  imageUrl: string;
  header: string;
};

export default function ScrollytellingComponent() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = [
    {
      id: 1,
      header: "Snappy and the Nuts",
      content: "Snappy was a busy, happy squirrel. All day long in the fall he searched through the leaves on the forest floor for tasty nuts to store for the long winter. He squeaked with excitement each time he found a nut and quickly buried it where he was sure he'd find it in the coming months. He had to hide them because other animals wanted to eat them, too.",
      imageUrl: "0.png",
    },
    {
      id: 2,
      header: "The Nuts",
      content: "Sometimes the Deer brothers trampled them and broke the nut shells. Often the naughty Chipmunk family stole them. Sometimes, Snappy couldn't quite remember where he put the piles of nuts. Snappy had been working for a long time and had saved many nuts. They would taste so good all winter when the ground is covered with snow.",
      imageUrl: "1.png",
    },
    {
      id: 3,
      header: "Auntie Pip",
      content: "Snappy thought for a long time about the best place to store them safely where no one could break or steal the nuts. Finally he smiled happily, thinking: \"I'll ask Auntie Pip. She knows all kinds of interesting things.\"",
      imageUrl: "2.png",
    }
  ];

  const goToPreviousSection = () => {
    if (activeSection > 0) {
      const newSection = activeSection - 1;
      setActiveSection(newSection);
      const element = document.querySelector(`#section${sections[newSection].id}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToNextSection = () => {
    if (activeSection < sections.length - 1) {
      const newSection = activeSection + 1;
      setActiveSection(newSection);
      const element = document.querySelector(`#section${sections[newSection].id}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scroller = scrollama();

    scroller
      .setup({
        step: '.scroll-text',
        offset: 0.5,
        debug: false
      })
      .onStepEnter(response => {
        setActiveSection(response.index);
        
        document.querySelectorAll('.graphic-image').forEach(img => {
          img.classList.remove('is-active');
        });
        
        const activeImage = document.querySelector(
          `.graphic-image[data-step="${response.index}"]`
        );
        activeImage?.classList.add('is-active');
        
        response.element.classList.add('is-active');
      })
      .onStepExit(response => {
        response.element.classList.remove('is-active');
      });

    return () => scroller.destroy();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        goToPreviousSection();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        goToNextSection();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection]);

  return (
    <div className="page-wrapper">
      <header className="main-header">
        <nav className="main-nav">
          <div className="logo">Snappy Squirrel ScrollyBooks</div>
          <ul className="main-nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="content-wrapper">
        <div className="scroll-wrapper">
          <div className="scroll-fixed">
            <div className="graphic-container">
              {sections.map((section, index) => (
                <div 
                  key={section.id}
                  className={`graphic-image ${index === 0 ? 'is-active' : ''}`} 
                  data-step={index}
                >
                  <Image
                    src={`/${section.imageUrl}`}
                    alt={section.header}
                    width={800}
                    height={600}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-content" ref={scrollContentRef}>
            <header className="story-header bg-green-900">
              <div className="story-nav">
                <h1 className="story-title">Snappy and the Nuts</h1>
                <div className="nav-controls">
                  <button
                    onClick={goToPreviousSection}
                    disabled={activeSection === 0}
                    className={`nav-button ${activeSection === 0 ? 'disabled' : ''}`}
                    aria-label="Previous section"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>

                  <span className="section-indicator">
                    {activeSection + 1} / {sections.length}
                  </span>

                  <button
                    onClick={goToNextSection}
                    disabled={activeSection === sections.length - 1}
                    className={`nav-button ${activeSection === sections.length - 1 ? 'disabled' : ''}`}
                    aria-label="Next section"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            {sections.map((section) => (
              <div 
                key={section.id}
                id={`section${section.id}`} 
                className="scroll-text"
              >
                <h2 className="text-2xl pb-5">{section.header}</h2>
                <p className="text-xl">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
