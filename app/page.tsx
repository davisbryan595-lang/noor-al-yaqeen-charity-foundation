import { HeroSection } from "@/components/hero-section"
import { ProgressSection } from "@/components/progress-section"
import { AboutSection } from "@/components/about-section"
import { ImpactSection } from "@/components/impact-section"
import { DonationSection } from "@/components/donation-section"
import { Navigation } from "@/components/navigation"

export default function CampaignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgressSection />
      <AboutSection />
      <ImpactSection />
      <DonationSection />
    </main>
  )
}
