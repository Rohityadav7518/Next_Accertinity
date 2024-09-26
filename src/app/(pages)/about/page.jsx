"use client"
import AppleCardsCarouselDemo from '@/components/Carouse'
import FloatingDockDemo from '@/components/Header'
import React from 'react'

function page() {
  return (
    <>
    <div className="h-screen flex flex-wrap items-center justify-center mt-5 w-full">
   <div className="flex  mt-5 w-full  items-center  h-3">
    <FloatingDockDemo/>
    </div>
    <AppleCardsCarouselDemo/>
    </div>
    </>
  )
}

export default page