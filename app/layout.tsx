import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const intern = localFont({
  src:"./fonts/InterVF.ttf",
  variable:"--font-intern",
  weight:"100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src:"./fonts/SpaceGroteskVF.ttf",
  variable:"--font-space-grotesk",
  weight:"100 200 300 400 500 700 800 900",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${intern.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
