// app/games/page.tsx
'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function GamePage() {
  useEffect(() => {
    // Any initialization code that needs to run after Phaser loads
    // can go here
  }, []);

  return (
    <>
      <Head>
        <title>Run, Snappy, Run!</title>
      </Head>
      <div className="min-h-screen bg-[#333] flex justify-center items-center">
        <div id="game"></div>
      </div>
      <Script 
        src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="/game.js"
        strategy="afterInteractive"
      />
    </>
  );
}
