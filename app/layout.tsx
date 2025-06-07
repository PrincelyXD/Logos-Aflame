import type { Metadata } from "next";
import {  Nunito } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import GetInTouch from "./components/GetInTouch";



const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Logos Aflame Ministries - Creating Love and Passion for God's Word ",
  description:
    "Logos Aflame Ministries is a Christian organization dedicated to igniting love and passion for God's Word through teaching, discipleship, and community engagement.",
    keywords: ["Logos Aflame", "church", "faith", "God's Word", "Christian community"],
    authors: [{ name: "Logos Aflame Team" }],
    creator: "Logos Aflame",
    openGraph: {
      title: "Logos Aflame Ministries",
      description: "Discover how we worship, grow, and serve together at Logos Aflame Ministries.",
      url: "https://logos-aflame.vercel.app/",
      siteName: "Logos Aflame Ministries",
      images: [
        {
          url: "https://logos-aflame.vercel.app/lam-building.png", // recommended size: 1200x630
          width: 1200,
          height: 630,
          alt: "Logos Aflame Church gathering",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Logos Aflame Ministries",
      description: "Join us in creating Love and Passion for God's Word",
      images: ["https://logos-aflame.vercel.app/lam-building.png"],
      creator: "@logosaflame",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`} >
      <Navbar />
        {children}
        <GetInTouch/>
        <Footer/>
      </body>
    </html>
  );
}
