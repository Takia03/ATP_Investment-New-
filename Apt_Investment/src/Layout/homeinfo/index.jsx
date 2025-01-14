import { Steps } from '../../components/steps'
import  InvestmentCarousel  from '../../components/investmentCarousel'
import './index.css'
import React from 'react'
import Hero from '../../components/Hero'
import Status from '../../components/Status'
import homephoto from '../../assets/Image/Group 47.png'

export default function Layout() {
    return (
      <div className="container mx-auto px-4 py-8 ">
        <section className='first-section'>
          <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1fr_550px] xl:gap-20 xl:grid-cols-[1fr_650px]">
                {/* Increased gap between sections */}
                <div className="flex flex-col justify-center">
                  <Hero />
                  <Status />
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <img
                      src={homephoto}
                      alt="Investment Building"
                      className="h-full w-full object-cover -mt-10" // Apply a negative margin-top to move it up
                  />
                </div>
              </div>
            </main>
          </div>
        </section>
  
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-center mb-4">
            How to Invest on the Projects?
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <Steps />
        </section>
  
        <section className="full-width-section mb-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ongoing Investment Options
          </h2>
          <InvestmentCarousel />
        </div>
      </section>
      </div>
    )
  }
  