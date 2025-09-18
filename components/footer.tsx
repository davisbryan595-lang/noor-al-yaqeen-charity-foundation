"use client"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white text-blue-900 dark:bg-blue-900 dark:text-white border-t border-blue-200 dark:border-blue-700">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Haul Boyz</h2>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Professional junk removal services. Fast, reliable, eco-friendly.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li><a href="#services" className="hover:text-blue-500">Appliances Removal</a></li>
            <li><a href="#services" className="hover:text-blue-500">Home Cleanout</a></li>
            <li><a href="#services" className="hover:text-blue-500">Garage Cleanout</a></li>
            <li><a href="#services" className="hover:text-blue-500">Yard Cleanup</a></li>
          </ul>
        </div>

        {/* About / Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#gallery" className="hover:text-blue-500">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">123 Main Street, Hamilton City</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Phone: (123) 456-7890</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Email: info@haulboyz.com</p>
        </div>
      </div>

      <div className="border-t border-blue-200 dark:border-blue-700 text-center py-4 text-sm text-blue-700 dark:text-blue-300">
        &copy; {new Date().getFullYear()} Haul Boyz. All rights reserved.
      </div>
    </footer>
  )
}
