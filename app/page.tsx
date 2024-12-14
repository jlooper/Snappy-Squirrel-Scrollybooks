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
      header: "Snappy Needs a Next",
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
        <div className="slider-container relative w-full py-8">
          <button 
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-800 text-white p-2 rounded-r-lg"
          >
            ←
          </button>
               
          <div 
            ref={sliderRef}
            className="cards-container overflow-x-hidden scroll-smooth whitespace-nowrap px-4"
          >
            {items.map((item) => (
              <div 
                key={item.id}
                className="card inline-block w-72 mr-4 bg-orange-900 rounded-lg shadow-lg whitespace-normal align-top" // Added align-top
              >
                <Link href={`/${item.id}`} className="block h-full"> {/* Added block and h-full */}
                  <div className="flex flex-col h-full p-4"> {/* Added flex container */}
                    <div className="rounded-lg mb-4 flex-shrink-0"> {/* Added flex-shrink-0 */}   
                      <Image
                        src={`/${item.imageUrl}`}
                        alt={item.header}
                        width={800}
                        height={800}
                        priority={item.id === 0}
                        className="w-full h-auto"
                      />                                         
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.header}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
       
          <button 
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-800 text-white p-2 rounded-l-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}