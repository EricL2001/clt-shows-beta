'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Amazing Platform</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover the power of our innovative solutions that will revolutionize your workflow and boost your productivity.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Advanced Analytics",
              "Seamless Integration",
              "24/7 Support"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and take your business to the next level with our cutting-edge platform.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Sign Up Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-1">
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <span className="ml-2 text-sm">Rated 4.9/5 by our amazing customers</span>
          </div>
        </div>
      </div>
    </div>
  )
}