'use client';
import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Image from 'next/image';
import Link from 'next/link';

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



  return (
    <div className="page-wrapper">
      <header className="main-header">
        <nav className="main-nav bg-green-800">
          <div className="logo">Snappy Squirrel ScrollyBooks</div>
          <ul className="main-nav-links">
          <ul className="main-nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
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
             

                  <span className="section-indicator">
                    {activeSection + 1} / {sections.length}
                  </span>

              
                </div>
              </div>
            </header>

            {sections.map((section) => (
              <div 
                key={section.id}
                id={`section${section.id}`} 
                className="scroll-text bg-green-800"
              >
                <h2 className="text-3xl pb-5">{section.header}</h2>
                <p className="text-2xl/loose">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
