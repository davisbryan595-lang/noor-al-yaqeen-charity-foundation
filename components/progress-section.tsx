"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressSection() {
  const [progress, setProgress] = useState(0)
  const targetAmount = 500000
  const currentAmount = 347500
  const progressPercentage = (currentAmount / targetAmount) * 100

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPercentage), 500)
    return () => clearTimeout(timer)
  }, [progressPercentage])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Progress</h2>
            <p className="text-lg text-muted-foreground">
              Together, we're making a real difference. See how close we are to our goal.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary">${currentAmount.toLocaleString()}</span>
                <span className="text-lg text-muted-foreground">of ${targetAmount.toLocaleString()} goal</span>
              </div>

              <Progress value={progress} className="h-4 mb-4" />

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.round(progressPercentage)}% funded</span>
                <span>${(targetAmount - currentAmount).toLocaleString()} remaining</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12,450</div>
                <div className="text-sm text-muted-foreground">Donors</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">89,200</div>
                <div className="text-sm text-muted-foreground">Meals Funded</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-chart-3 mb-2">23</div>
                <div className="text-sm text-muted-foreground">Days Remaining</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
