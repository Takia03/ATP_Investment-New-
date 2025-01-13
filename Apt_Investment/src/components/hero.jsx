import React from 'react';
import { Button } from "@/components/button"

export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
          Invest Today and Build Your Future
        </h1>
        <p className="text-lg text-muted-foreground">
          Get easy market access and enjoy monthly return again. United States stocks and ETFs!
        </p>
        <Button className="bg-[#456FE8] hover:bg-[#3655C4] text-white rounded-[20px] py-3 px-6 transition-all duration-300 hover:scale-105" size="lg">
             Get Started Now
        </Button>


      </div>
    </div>
  )
}

