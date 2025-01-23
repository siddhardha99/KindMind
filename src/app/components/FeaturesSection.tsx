'use client'

import { Heart, Brain, Shield, Gift } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { FEATURES } from '@/lib/constants'

export default function FeaturesSection() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Heart': return <Heart className="w-6 h-6 text-pink-500" />
      case 'Brain': return <Brain className="w-6 h-6 text-blue-500" />
      case 'Shield': return <Shield className="w-6 h-6 text-green-500" />
      case 'Gift': return <Gift className="w-6 h-6 text-purple-500" />
      default: return null
    }
  }

  return (
    <div id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose YiPi Bears?</h2>
          <p className="text-xl text-gray-600">Innovative technology meets emotional support</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}