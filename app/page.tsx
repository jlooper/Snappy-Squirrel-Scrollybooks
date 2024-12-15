'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { stories, getFirstStoryPerBook } from '@/components/Storylines';

export default function HomeComponent() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstStoriesPerBook = getFirstStoryPerBook(stories);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <h1 className="text-xl sm:text-2xl md:text-3xl m-4 sm:m-10">
          Welcome to Snappy Squirrel Scrollybooks
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl m-4 sm:m-10">
          Here, financial literacy is made simple and fun for kids of all ages. Click on a card and scroll the text area to learn!
        </h2>
        
        {/* Hide slider controls on mobile */}
        <div className="slider-container relative w-full py-4 sm:py-8">
          <button 
            onClick={slideLeft}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-800 text-white p-2 rounded-r-lg"
          >
            ←
          </button>
               
          <div 
            ref={sliderRef}
            className="cards-container 
              flex flex-col sm:flex-row
              sm:overflow-x-hidden sm:whitespace-nowrap 
              px-4 sm:px-4
              space-y-4 sm:space-y-0"
          >
            {firstStoriesPerBook.map((story) => (
              <div 
                key={story.id}
                className="card 
                  block sm:inline-block 
                  w-full sm:w-72
                  mb-4 sm:mb-0 
                  mr-0 sm:mr-4 
                  bg-orange-900 
                  rounded-lg 
                  shadow-lg 
                  sm:whitespace-normal 
                  sm:align-top"
              >
                <Link href={`/${story.book}`} className="block h-full">
                  <div className="flex flex-col h-full p-4">
                    <div className="rounded-lg mb-4 flex-shrink-0">   
                      <Image
                        src={`/images/${story.imageUrl}`}
                        alt={story.header}
                        width={800}
                        height={800}
                        priority={story.id === 0}
                        className="w-full h-auto rounded-lg"
                      />                                         
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{story.header}</h3>
                    <p className="mt-3 mb-3">{story.tagline}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
       
          <button 
            onClick={slideRight}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-800 text-white p-2 rounded-l-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}