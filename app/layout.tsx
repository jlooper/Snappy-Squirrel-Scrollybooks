import type { Metadata } from "next";
import { Playwrite_FR_Moderne } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const font = Playwrite_FR_Moderne({
  variable: "--font"
});

export const metadata: Metadata = {
  title: "Snappy Squirrel Scrollybooks",
  description: "Snappy Squirrel Scrollybooks: Financial Literacy for Kids",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased bg-green-600 text-white`}>
        <div className="overflow-auto">
          <header className="main-header">
            <Navigation />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
