"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Name & About */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="text-black font-bold text-3xl md:text-4xl">
            Noor Al-Yaqeen Charity Foundation
          </span>
          <p className="text-blue-200 text-sm text-center md:text-left">
            Noor Al-Yaqeen Charity Foundation is committed to serving the community with compassion, integrity, 
            and impactful initiatives that bring real change.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Contact</h3>
          <p className="text-blue-200 text-sm mb-2">📞 (123) 456-7890</p>
          <p className="text-blue-200 text-sm mb-2">📧 info@nooralyaqeen.org</p>
          <p className="text-blue-200 text-sm">
            🏠 Noor Al-Yaqeen Charity Foundation <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=1140+Burnhamthorpe+W+Rd,+137,+Mississauga,+Ontario,+Canada,+L5C0A3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              1140 Burnhamthorpe W Rd, 137, Mississauga, Ontario, Canada, L5C0A3
            </a>
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 mt-8 py-4 text-center text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} Noor Al-Yaqeen Charity Foundation. All rights reserved.
      </div>
    </footer>
  )
}
