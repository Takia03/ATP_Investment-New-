'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InvestmentCard from './investmentCard';
import { Link } from 'react-router-dom'; // Correct import

export default function InvestmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    async function fetchInvestments() {
      try {
        const response = await fetch('/data/investments.json');
        const data = await response.json();
        setInvestments(data.investments);
      } catch (error) {
        console.error('Error fetching investments:', error);
      }
    }

    fetchInvestments();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === investments.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? investments.length - 3 : prev - 1
    );
  };

  if (investments.length === 0) {
    return <div>Loading investments...</div>;
  }

  return (
    <div className="relative mb-16">
      <div className="flex gap-6 overflow-hidden">
        {investments.slice(currentSlide, currentSlide + 3).map((investment) => (
          <div key={investment.id} className="w-1/3 flex-shrink-0">
            <InvestmentCard {...investment} />
          </div>
        ))}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(investments.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              Math.floor(currentSlide / 3) === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index * 3)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Link to="/investments">
          <Button 
            variant="link" 
            className="text-black-600 hover:text-blue-600 bg-white px-4 py-2 rounded-full shadow-md"
          >
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
