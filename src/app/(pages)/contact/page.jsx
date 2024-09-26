
"use client"
import AppleCardsCarouselDemo from '@/components/Carouse'
import ThreeDCardDemo from '@/components/Demo'
import FloatingDockDemo from '@/components/Header'
import React from 'react'

function page() {
    const CardsArray = Array.from({length:6})
  return (
<>
<div className="h-screen flex flex-wrap items-center justify-center mt-5 w-full">
   <div className="flex  w-full mt-5 items-center h-5 ">
    <FloatingDockDemo />
    </div>
    <div className=" flex w-full ">
    <AppleCardsCarouselDemo/>
    </div>
   <div className="flex  flex-wrap  w-full   justify-evenly ">
    {
        CardsArray.map((_,index)=>(
            <ThreeDCardDemo key={index}/>
        ))
    }
    </div>

    </div>
</>
  )
}

export default page