
import { AboutSection } from "../components/home/AboutSection"
import { BlogSection } from "../components/home/BlogSection"
import { HeroSection } from "../components/home/HeroSection"
import { LiveStreamSection } from "../components/home/LiveStreamSection"
import { ServicesSection } from "../components/home/ServicesSection"

const page = () => {
  return (
    <>
     <HeroSection/>
     <AboutSection/>
     <ServicesSection/>
     <BlogSection/>
     <LiveStreamSection/>
    
    </>
  )
}

export default page
