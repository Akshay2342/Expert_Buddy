import React from 'react';
// Import the Card component from shadcn
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1: Fill in a brief */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative md:w-1/2">
              <div className="absolute top-0 left-0 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                01
              </div>
              <div className="ml-12">
                <h3 className="text-lg font-semibold mb-2">Fill in a brief</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tell us what you need help with, describe your project requirements, and set the deadline.
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 md:ml-8">
              {/* Placeholder for the form image */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                [Form Image Placeholder]
              </div>
            </div>
          </div>
        </Card>

        {/* Step 2: Choose an expert */}
        <Card className="p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                02
              </div>
              <div className="ml-12">
                <h3 className="text-lg font-semibold mb-2">Choose an expert</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full mt-4">
              {/* Placeholder for the expert selection image */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                [Expert Selection Image Placeholder]
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Step 3: Get it Done On Time */}
      <div className="mt-8">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative md:w-1/2">
              <div className="absolute top-0 left-0 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                03
              </div>
              <div className="ml-12">
                <h3 className="text-lg font-semibold mb-2">Get It Done On Time</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 md:ml-8">
              {/* Placeholder for the chat image */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                [Chat Image Placeholder]
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;