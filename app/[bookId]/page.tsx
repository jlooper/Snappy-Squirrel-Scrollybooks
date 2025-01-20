'use client';
import { useParams, notFound } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Image from 'next/image';
import { getStoriesByBook } from '@/components/Storylines';
import LadyBug from '@/components/LadyBug';

export default function ScrollytellingComponent() {
  const params = useParams();
  const bookId = parseInt(params.bookId as string, 10);
  
  if (isNaN(bookId) || bookId < 1) {
    notFound();
  }

  const story = getStoriesByBook(bookId);
  
  if (!story || story.length === 0) {
    notFound();
  }

  const [activeSection, setActiveSection] = useState(0);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollama();

    scroller
      .setup({
        step: '.scroll-text',
        offset: 0.5,
        debug: false,
        progress: true
      })
      .onStepEnter(response => {
        setActiveSection(response.index);
        
        // Handle image transitions
        document.querySelectorAll('.graphic-image').forEach(img => {
          img.classList.remove('is-active');
        });
        
        const currentStory = story[response.index];
        const scrollContent = document.querySelector('.scroll-content');
        
        if (scrollContent) {
          if (!currentStory.imageUrl) {
            scrollContent.classList.add('full-width');
          } else {
            scrollContent.classList.remove('full-width');
            
            const activeImage = document.querySelector(
              `.graphic-image[data-step="${response.index}"]`
            );
            if (activeImage) {
              activeImage.classList.add('is-active');
            }
          }
        }
      });

    return () => scroller.destroy();
  }, [story]);

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="scroll-wrapper">
          {/* Fixed image container */}
          <div className="scroll-fixed hidden md:block">
            <div className="graphic-container">
              {story.map((story, index) => (
                story.imageUrl && story.imageUrl.length > 0 && (
                  <div 
                    key={story.id}
                    className={`graphic-image ${index === 0 ? 'is-active' : ''}`} 
                    data-step={index}
                  >
                    <Image
                      src={`/images/${story.imageUrl}`}
                      alt={story.header}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Scrollable content */}
          <div 
            className={`bg-green-600 scroll-content ${!story[activeSection].imageUrl ? 'full-width' : ''}`} 
            ref={scrollContentRef}
          >
            <header className={`story-header hidden bg-yellow-500 text-black md:block ${!story[activeSection].imageUrl ? 'full-width' : ''}`}>
              <div className="story-nav">              
                <h1 className="story-title text-black">{story[0].title}</h1>           
                <div className="nav-controls nav-button fixed-controls items-center gap-2">
                  <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="animate-bounce">↓</div>
                  </div>
                  <span className="section-indicator">
                    {activeSection + 1} / {story.length}
                  </span>
                </div>
              </div>
            </header>

            {story.map((story) => (
              <div 
                key={story.id}
                id={`story${story.id}`} 
                className={`scroll-text bg-white text-black ${!story.imageUrl ? 'full-width' : ''}`}
              >
                {/* Mobile image */}
                {story.imageUrl && story.imageUrl.length > 0 && (
                  <div className="md:hidden w-full h-[50vh] relative mb-6">
                    <Image
                      src={`/images/${story.imageUrl}`}
                      alt={story.header}
                      fill
                      className="object-cover"
                      priority={story.id === 0}
                    />
                  </div>
                )}
                <h2 className="text-2xl pb-5">{story.header}</h2>
                <p className="text-xl/loose">{story.content}</p>
                <LadyBug funFact={story.funFact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
