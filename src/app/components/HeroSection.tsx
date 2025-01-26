import { Star } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function HeroSection() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet YiPi Bears
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered plush companions that help children navigate their emotional journey through interactive storytelling
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition transform hover:scale-105">
              Waitlist Coming Soon
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
          
          {/* <Alert className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <Star className="w-4 h-4 text-blue-600" />
            <AlertTitle>Early Bird Special</AlertTitle>
            <AlertDescription>
              First 100 pre-orders get 20% off and a free accessory pack
            </AlertDescription>
          </Alert> */}
        </div>
      </div>
    </div>
  )
}
