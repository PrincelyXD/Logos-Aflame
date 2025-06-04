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
