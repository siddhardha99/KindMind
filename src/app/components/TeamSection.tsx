// app/components/TeamSection.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, HeartPulse } from 'lucide-react'

const teamMembers = [
  {
    name: "Yashwanth Nadella",
    role: "MS in Computer Science student at Johns Hopkins",
    description: "Software Engineer",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    expertise: ["System Architecture", "Full Stack Development", "Product Design"]
  },
  {
    name: "Stephen Cheng",
    role: "Resident Psychiatrist at University of Maryland / Sheppard Pratt",
    description: "Mental Health Expert",
    icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
    expertise: ["Child Psychology", "Therapeutic Design", "Healthcare Innovation"]
  },
  {
    name: "Siddardha Varma",
    role: "MS in Artificial Intelligence student at University of North Texas",
    description: "AI Engineer",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    expertise: ["Machine Learning", "Natural Language Processing", "AI Systems"]
  }
]

export default function TeamSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meet the Co-Founders
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Combining expertise in technology, mental health, and artificial intelligence
          to create meaningful emotional learning experiences
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur">
              <CardContent className="pt-5">
                <div className="w-16 h-16 mx-auto mb-6  rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center mb-2 font-medium">{member.description}</p>
                <p className="text-gray-500 text-center text-sm mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}