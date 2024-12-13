import type { Metadata } from "next";
import { Playwrite_FR_Moderne } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const font = Playwrite_FR_Moderne({
  variable: "--font"
});


export const metadata: Metadata = {
  title: "Scrolly Snappy",
  description: "Snappy Squirrel v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
      >
       <div className="overflow-auto">
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
          {children}
        </div>
      </body>
    </html>
  );
}
