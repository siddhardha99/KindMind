import { Card, CardContent } from "../../components/ui/card"

export default function CTASection() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="pt-10 text-3xl font-bold mb-4">Ready to Join the YiPi Family?</h2>
            <p className="text-lg mb-4 opacity-90">
             Join the Waitlist and be among the first to experience the future of emotional learning
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition transform hover:scale-105">
              Waitlist Coming Soon
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}