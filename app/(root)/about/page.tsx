

import React from 'react'
import AboutHero from './components/AboutHero'
import { PastorSpotlight } from './components/PastorSpotlight'
import { TeamSection } from './components/TeamSection'
import { DepartmentSection } from './components/DepartmentSection'

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