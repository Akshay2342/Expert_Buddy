"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Login() {
  const router = useRouter(); // Initialize router

  const handleNavigation = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <Dialog open onOpenChange={(isOpen) => !isOpen && handleNavigation()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Sign Up XpertBuddy</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <label className="block text-sm font-medium">Email</label>
          <Input type="email" placeholder="Enter your email" defaultValue="wadewarren@gmail.com" />
          
          <div className="flex items-center space-x-2">
            <Checkbox id="agreement" />
            <label htmlFor="agreement" className="text-sm">
              I accept <a href="#" className="text-purple-600">User Agreement</a>
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <label htmlFor="marketing" className="text-sm">
              I don’t want to receive marketing messages from <a href="#" className="text-purple-600">XpertBuddy</a>
            </label>
          </div>
          
          <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleNavigation}>
            Sign Up
          </Button>
          
          <Button className="w-full mt-2 bg-gray-300 hover:bg-gray-400" onClick={handleNavigation}>
            Cancel
          </Button>
          
          <p className="text-center text-sm mt-4">
            Already registered? <a href="#" className="text-purple-600 font-medium">Log In</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
