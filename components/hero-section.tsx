"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function HeroSection() {
  const scrollToDonate = () => {
    const donateSection = document.querySelector("#donate")
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/humanitarian-aid-workers-distributing-food-to-fami.jpg"
          alt="Humanitarian aid in Palestine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-red-500 fill-current" />
            <span className="text-sm font-medium uppercase tracking-wider">Emergency Appeal</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Help Feed Families in Palestine
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty">
            Every meal shared brings hope. Join thousands of people providing essential nutrition to families in need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
              onClick={scrollToDonate}
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">2.3M</div>
              <div className="text-sm text-gray-300">Meals Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">180K</div>
              <div className="text-sm text-gray-300">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">45</div>
              <div className="text-sm text-gray-300">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
