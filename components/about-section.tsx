import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Clock, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About This Campaign</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              The humanitarian crisis in Palestine has left millions of families without access to basic nutrition. Your
              support provides immediate relief through emergency food assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/aboutpic.jpg"
                alt="Families receiving emergency food assistance"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Emergency Food Relief</h3>
              <p className="text-muted-foreground">
                Our emergency response provides nutritious meals and food packages to families who have been displaced
                or are facing severe food insecurity. Every donation directly translates to meals on the table for those
                who need it most.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      100% of donations go directly to food assistance programs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Partners</h4>
                    <p className="text-sm text-muted-foreground">
                      Working with trusted local organizations for efficient distribution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Immediate Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Food packages delivered within 48 hours of donation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Verified Impact</h4>
                <p className="text-sm text-muted-foreground">
                  All distributions are documented and verified by our field teams
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Family Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Priority given to families with children and elderly members
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Wide Reach</h4>
                <p className="text-sm text-muted-foreground">
                  Serving communities across Gaza, West Bank, and refugee camps
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">24/7 Operations</h4>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock coordination to ensure continuous food supply
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
