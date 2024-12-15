'use client';
import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Image from 'next/image';
import { getStoriesByBook } from '@/components/Storylines';
import { useParams, notFound } from 'next/navigation'

export default function ScrollytellingComponent() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const bookId = parseInt(params.bookId as string, 10); // bookId matches the folder name [bookId]

  // Handle invalid book ID
  if (isNaN(bookId) || bookId < 1) {
    notFound();
  }

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

  const story = getStoriesByBook(bookId);
  
  // Handle case where no stories found for valid book ID
  if (!story || story.length === 0) {
    notFound();
  }

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="scroll-wrapper">
          <div className="scroll-fixed">
            <div className="graphic-container">
              {story.map((story, index) => (
                <div 
                  key={story.id}
                  className={`graphic-image ${index === 0 ? 'is-active' : ''}`} 
                  data-step={index}
                >
                  <Image
                    src={`/images/${story.imageUrl}`}
                    alt={story.header}
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
                <h1 className="story-title">{story[0].title}</h1>           
                <div className="nav-controls">
                
                <div className=" top-4 text-white px-4 py-2 rounded-full flex items-center gap-2">
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
                className="scroll-text bg-green-800"
              >
                <h2 className="text-3xl pb-5">{story.header}</h2>
                <p className="text-2xl/loose">{story.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
