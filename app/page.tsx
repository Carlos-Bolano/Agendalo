import Hero from "@/components/landing/Hero"
import HowItWorks from "@/components/landing/HowItWorks"
import Benefits from "@/components/landing/Benefits"
import Pricing from "@/components/landing/Pricing"
import Footer from "@/components/landing/Footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Footer />
    </main>
  )
}
