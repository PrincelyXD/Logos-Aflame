import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex w-fit relative scale-[0.7] md:scale-[0.8] justify-center  items-center group">
    <span className="bg-white w-20 h-14 absolute  rounded-full">

    </span>
       <img
     src="/LAM-logo.png"
      alt="logo"
      className="h-[70px] relative"
      />
   
    
  </Link>
  )
}

export default Logo
