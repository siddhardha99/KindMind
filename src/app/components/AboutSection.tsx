import { Card, CardContent } from "@/components/ui/card"
import { Bot, Puzzle, Star, Heart, Sparkles, MessageCircle } from 'lucide-react'

export default function AboutSection() {
  const features = [
    { icon: <Star className="w-4 h-4" />, text: "Personalized Stories" },
    { icon: <Heart className="w-4 h-4" />, text: "Emotional Support" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Interactive Experience" },
    { icon: <MessageCircle className="w-4 h-4" />, text: "Real-time Adaptation" }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Reimagining Emotional Learning
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {features.map((feature, index) => (
              <span key={index} className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                {feature.icon}
                {feature.text}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 transform group-hover:scale-95 transition-transform duration-300"></div>
            <CardContent className="pt-4 relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl mr-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-600">What do we do?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We craft AI-powered stories that forge genuine connections with children facing emotional challenges. Our intelligent system creates narratives that provide authentic support, empathy, and practical guidance, empowering children to choose stories that resonate with their unique journey.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Personalized storytelling experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Emotional intelligence development</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Supportive guidance system</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 transform group-hover:scale-95 transition-transform duration-300"></div>
            <CardContent className="pt-4 relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl mr-4">
                  <Puzzle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-600">How does this work?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Using advanced language models, we create dynamic, personalized narratives based on each child's unique experiences and needs. Our interactive storytelling system adapts in real-time, ensuring each tale resonates deeply with the child's journey.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Advanced AI storytelling</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Real-time adaptability</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Interactive engagement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}