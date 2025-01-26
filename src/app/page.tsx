import HeroSection from './components/HeroSection'
import NavigationBar from './components/NavigationBar'
import StatsSection from './components/StatsSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import TeamSection from './components/TeamSection'
import AboutSection from './components/AboutSection'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />
      <HeroSection/>
      <StatsSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <TeamSection/>
      <CTASection/>
      <Footer/>
     
  


    </main>
  )
}