"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { DonationModal } from "./DonationModal"

export function DonationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="donate" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 fill-current" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Make a Donation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Your contribution provides immediate relief to families in need. Every dollar makes a difference.
          </p>
          <Button
            size="lg"
            className="px-12 py-4 text-lg bg-primary hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Donate Now
          </Button>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
