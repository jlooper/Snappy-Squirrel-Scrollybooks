import type { Metadata } from "next";
import { Playwrite_FR_Moderne } from "next/font/google";
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
        <div className="bg-green-800 m-10">
          {children}
        </div>
      </body>
    </html>
  );
}
