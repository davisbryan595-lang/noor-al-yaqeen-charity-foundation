"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#impact", label: "Impact" },
  ]

  const scrollToDonate = () => {
    const donateSection = document.querySelector("#donate")
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Arabic Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <Image
              src="/logo.jpg"
              alt="Noor Al-Yaqeen Charity Foundation Logo"
              width={50} // smaller for mobile
              height={50}
              className="object-contain md:w-[70px] md:h-[70px]"
            />
            <span className="font-bold text-lg">مؤسسة نور اليقين</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="ml-2" onClick={scrollToDonate}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                size="sm"
                className="w-fit mt-2"
                onClick={() => {
                  setIsOpen(false)
                  scrollToDonate()
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
