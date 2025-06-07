

import React from 'react'
import AboutHero from './components/AboutHero'
import { PastorSpotlight } from './components/PastorSpotlight'
import { TeamSection } from './components/TeamSection'
import { DepartmentSection } from './components/DepartmentSection'


export const metadata = {
  title: "About Us - Logos Aflame Ministries",
  description:
    "Learn about Logos Aflame Ministries — our vision, our leaders, and the heart behind the church. Meet Pastor Grace and our dedicated team.",
  openGraph: {
    title: "About Logos Aflame Ministries",
    description:
      "Discover the heart of Logos Aflame Ministries. Meet our founder, pastors, and the teams behind the mission.",
    url: "https://logos-aflame.vercel.app/about",
    siteName: "Logos Aflame Ministries",
    images: [
      {
        url: "https://logos-aflame.vercel.app/blessing.png", 
        width: 1200,
        height: 630,
        alt: "Pastor Grace and Logos Aflame Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Logos Aflame Ministries",
    description:
      "Discover our story, our passion for God's Word, and the leaders shaping the vision of Logos Aflame.",
    images: ["https://logos-aflame.vercel.app/blessing.png"],
    creator: "@logosaflame", // Optional: update if you have a real handle
  },
};


const page = () => {
  return (
    <div className=' overflow-hidden'>
    <AboutHero/> 
    <PastorSpotlight/>
    <TeamSection/>
    <DepartmentSection/>
    </div>
  )
}

export default page
// bg-[url('/pst-grace2.png')]