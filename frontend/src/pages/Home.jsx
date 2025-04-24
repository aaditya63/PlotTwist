import CallToAction from '@/components/home/CalltoAction'
import HeroSection from '@/components/home/HeroSection'
import HowItWorks from '@/components/home/HowItWorks'
import React from 'react'

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <HowItWorks/>
        <CallToAction/>
    </div>
  )
}
