"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, CreditCard, Shield, CheckCircle, X } from "lucide-react"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState("50")
  const [customAmount, setCustomAmount] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    paymentMethod: "card",
    monthly: false,
  })

  const presetAmounts = [
    { value: "25", meals: "10 meals" },
    { value: "50", meals: "20 meals" },
    { value: "100", meals: "40 meals" },
    { value: "250", meals: "100 meals" },
  ]

  const selectedAmount = amount === "custom" ? customAmount : amount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 overflow-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-xl shadow-xl relative animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <Card className="m-6 text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                Your donation of ${selectedAmount} will help provide {Math.floor(Number(selectedAmount) * 2)} meals to
                families in need.
              </p>
              <p className="text-sm text-muted-foreground">You will receive a confirmation email shortly.</p>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-6 max-h-[80vh] overflow-y-auto">
            {/* Donation Amount */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Donation Amount</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={amount} onValueChange={setAmount}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {presetAmounts.map((preset) => (
                      <div key={preset.value} className="relative">
                        <RadioGroupItem value={preset.value} id={preset.value} className="peer sr-only" />
                        <Label
                          htmlFor={preset.value}
                          className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
                        >
                          <span className="text-2xl font-bold">${preset.value}</span>
                          <span className="text-sm text-muted-foreground">{preset.meals}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom" className="flex items-center gap-2">
                      Custom amount: $
                      <Input
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-24"
                        min="1"
                      />
                    </Label>
                  </div>
                </RadioGroup>
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    id="monthly"
                    checked={formData.monthly}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, monthly: checked as boolean }))}
                  />
                  <Label htmlFor="monthly" className="text-sm">
                    Make this a monthly donation
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Donor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>

                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 p-4 border border-border rounded-lg">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Shield className="h-4 w-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-4">
              <Button type="submit" size="lg" className="text-lg px-12 py-4">
                Donate ${selectedAmount || "0"} {formData.monthly && "Monthly"}
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Your donation will provide approximately {Math.floor(Number(selectedAmount || 0) * 2)} meals
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
