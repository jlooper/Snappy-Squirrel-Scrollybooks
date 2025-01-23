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
        <h1 className="text-xl sm:text-2xl md:text-3xl m-6">
          Welcome to Snappy Squirrel Scrollybooks
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mx-6">
          Here, financial literacy is made simple and fun for kids of all ages. Click on a card and scroll the text area to learn!
        </h2> 
          <div 
            className="grid grid-cols-1 gap-8 md:grid-cols-5 m-4 md:px-6 mx-auto"
          >
            {firstStoriesPerBook.map((story) => (
              <div 
                key={story.id}
                className={`card 
                  block sm:inline-block 
                  w-full md:w-60
                  mb-4 sm:mb-0                
                  ${story.content ? 'bg-orange-400 hover:bg-orange-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}
                  rounded-lg 
                  shadow-lg 
                  sm:whitespace-normal 
                  sm:align-top`}
              >
                {story.content ? (
                  // If copy exists, wrap with Link
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
                ) : (
                  // If copy is empty, render without Link
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
                )}
              </div>
            ))}
          </div>
       
          
       
      </div>
    </div>
  );
}
