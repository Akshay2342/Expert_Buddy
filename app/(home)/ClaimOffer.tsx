import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FlagIcon } from "lucide-react";

export default function ClaimOffer() {
  return (
    <div className="bg-purple-300 p-10 rounded-lg flex flex-col md:flex-row items-center justify-between text-left w-300 ml-15">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold">🎉 Claim Your Offer</h1>
        <p className="mt-2 text-gray-700">
          Hello, we have a special ongoing offer for our new customers to avail <strong>30% OFF & 150% Cashback</strong> on their first assignment with us. We are committed to delivering premium service at an affordable price. Enter your phone number below to get the coupon code. <em>(We do not spam)</em>
        </p>
        <p className="mt-4 font-semibold">Susan White</p>
        <p className="text-gray-600">Head of Sales Departments</p>
      </div>
      
      <div className="md:w-1/2 mt-6 md:mt-0 bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">30% OFF & 150% Cashback On Your First Order!</h2>
        <p className="text-gray-600 mt-2">Type your WhatsApp Number to get an exclusive Code.</p>
        
        <div className="flex items-center border rounded-md mt-4 p-2">
          <FlagIcon className="text-gray-500" size={20} />
          <span className="ml-2 text-gray-600">+1</span>
          <Input className="ml-2 flex-1 border-none outline-none" placeholder="Enter your WhatsApp number" />
        </div>
        
        <Button className="bg-purple-600 text-white w-full mt-4">Get Offer on WhatsApp</Button>
      </div>
    </div>
  );
}
