// app/about.tsx
'use client';
import Image from 'next/image';

export default function About() {
    return (
      <div className="container bg-green-800 rounded mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">About Snappy Scrollybooks</h1>
      <h2 className="text-2xl font-bold pt-6 pb-6">The authors</h2>
      <p className="text-xl pb-6 leading-loose">Snappy Squirrel Scrollybooks is a financial literacy platform that makes learning about money fun and engaging for kids of all ages. Our interactive stories are designed to help children develop a healthy relationship with money and learn important financial concepts in a simple and entertaining way.</p>
      <Image
          src="/images/authors.jpeg"
          alt="Jerry and Jen"
          width={600}
          height={600}
        />  
      <p className="text-xl pt-5 leading-loose">Written as a series of stories by Jerry Looper, who built his career at McDonnell Douglas aircraft and put four children through college on a manager&rsquo;s salary, these books are a collaboration between a father and daughter. Jen Looper is a web developer and artist who understands the power that interactive media can have to tell stories.</p>
      <h2 className="text-2xl font-bold pt-6 mb-6">The art</h2>
      <p className="text-xl leading-loose">The illustrations in this book are a mixed-media project by Jen. First, she used a gelli plate to create mimeograph-style monoprints using acrylic paint and - when it works - image transfer from various recycled magazines and books. Then, she cuts up the paper to create the collage animals. Photographed in pieces and reassembled in Procreate on an iPad, extras can be added digitally. Below are some photos of the process. Rubber stampd and nature prints, all using repurposed materials, also add to the layers.</p>
      <Image
          src="/images/workspace.jpeg"
          alt="the workspace"
          width={600}
          height={440}
          className="pt-5 pb-5"
        /> 
        {/* caption */}
        <p className="text-xl leading-loose italic">The workspace where the magic happens!</p>
        <Image
          src="/images/raw-fox.png"
          alt="the pieces of the animal collage"
          width={600}
          height={630}
          className="pt-5 pb-5"
        /> 
        {/* caption */}
        <p className="text-xl leading-loose italic">Starting pieces of the fox character</p>
        <Image
          src="/images/legs.png"
          alt="the legs of the fox collage"
          width={600}
          height={630}
          className="pt-5 pb-5"
        /> 
        {/* caption */}
        <p className="text-xl leading-loose italic">Digitally removing the background of each piece for importing into Procreate</p>
        <Image
          src="/images/final-fox.png"
          alt="the final fox collage"
          width={600}
          height={630}
          className="pt-5 pb-5"
        /> 
        {/* caption */}
        <p className="text-xl leading-loose italic">Mr. Fox, ready for skulking into the books!</p>
      
      </div>
    );
  }
  