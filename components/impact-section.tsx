import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight } from "lucide-react"

export function ImpactSection() {
  const stories = [
    {
      name: "Fatima Al-Zahra",
      location: "Gaza",
      story:
        "Thanks to your support, my three children have nutritious meals every day. The food packages have been a lifeline for our family during these difficult times.",
      image: "/impact1.jpg",
    },
    {
      name: "Ahmed Hassan",
      location: "West Bank",
      story:
        "As a father of five, I was struggling to provide for my family. The emergency food assistance has given us hope and the strength to keep going.",
      image: "/impact2.jpg",
    },
    {
      name: "Mariam Khalil",
      location: "Refugee Camp",
      story:
        "The fresh vegetables and nutritious food have helped my elderly parents maintain their health. We are so grateful for this support from people around the world.",
      image: "/impact3.jpg",
    },
  ]

  const scrollToDonate = () => {
    const donateSection = document.querySelector("#donate")
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="impact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every donation creates a ripple of hope. Here are just a few stories from families whose lives have been
              touched by your generosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={`${story.name} from ${story.location}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-grow">
                      <Quote className="h-6 w-6 text-primary mb-3" />
                      <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                    </div>

                    <div className="mt-auto">
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2.3M</div>
                <div className="text-sm text-muted-foreground">Meals Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">180K</div>
                <div className="text-sm text-muted-foreground">Families Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-3 mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Reach Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-4 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Operations</div>
              </div>
            </div>

            {/* Donate Button */}
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[340px] text-xl px-20 py-6 bg-primary hover:bg-primary/90 font-semibold"
              onClick={scrollToDonate}
            >
              <span className="w-full flex items-center justify-between">
                <span className="flex-1 text-center">Donate Now</span>
                <ArrowRight className="h-6 w-6 ml-4 flex-shrink-0" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
