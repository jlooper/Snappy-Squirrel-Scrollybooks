'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function HomeComponent() {
  const sliderRef = useRef<HTMLDivElement>(null);

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

  type Item = {
    id: number;
    imageUrl: string;
    content: string;
    header: string;
  };

  const items: Item[] = [
    {
      id: 1,
      header: "Snappy and the Nuts",
      content: "Snappy needs to save nuts for Winter",
      imageUrl: "0.png",
    },
    {
      id: 2,
      header: "Snappy Needs a Nest",
      content: "Snappy needs a warm home!",
      imageUrl: "1.png",
    },
    {
      id: 3,
      header: "Snappy Plays the Stock Market",
      content: "Snappy loses some and wins some!",
      imageUrl: "2.png",
    },
    {
      id: 4,
      header: "Snappy Loses",
      content: "A risky investment",
      imageUrl: "0.png",
    },
    {
      id: 5,
      header: "Snappy Buys a Bond",
      content: "A safer way to invest",
      imageUrl: "1.png",
    }
  ];

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
            {items.map((item) => (
              <div 
                key={item.id}
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
                <Link href={`/${item.id}`} className="block h-full">
                  <div className="flex flex-col h-full p-4">
                    <div className="rounded-lg mb-4 flex-shrink-0">   
                      <Image
                        src={`/${item.imageUrl}`}
                        alt={item.header}
                        width={800}
                        height={800}
                        priority={item.id === 0}
                        className="w-full h-auto rounded-lg"
                      />                                         
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{item.header}</h3>
                    {/* Show content on mobile */}
                    <p className="sm:hidden">{item.content}</p>
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