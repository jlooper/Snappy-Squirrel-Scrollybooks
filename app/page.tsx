'use client';
import Link from 'next/link';

export default function HomeComponent() {
  
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
               <p>hey</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
