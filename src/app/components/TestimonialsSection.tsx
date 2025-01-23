'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say About our Stories</h2>
        </div>

        <div className="relative">
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4 pt-10">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 text-gray-700">"{TESTIMONIALS[activeTestimonial].content}"</p>
              <div>
                <div className="font-semibold">{TESTIMONIALS[activeTestimonial].author}</div>
                <div className="text-gray-600">{TESTIMONIALS[activeTestimonial].role}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}