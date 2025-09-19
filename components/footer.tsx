"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-blue-800 border-t border-blue-200">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Haul Boyz</h3>
          <p className="text-blue-700 text-sm">
            Family-owned junk removal business serving Sheridan and surrounding areas. Fast, reliable, and eco-friendly services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-700 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-blue-700 text-sm mb-2">📞 (123) 456-7890</p>
          <p className="text-blue-700 text-sm mb-2">📧 info@haulboyz.com</p>
          <p className="text-blue-700 text-sm">🏠 Sheridan, Indiana</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-200 mt-8 py-4 text-center text-blue-700 text-sm">
        &copy; {new Date().getFullYear()} Haul Boyz. All rights reserved.
      </div>
    </footer>
  )
}
