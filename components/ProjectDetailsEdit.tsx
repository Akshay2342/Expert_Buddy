"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CalendarIcon, Paperclip, Zap } from "lucide-react";

// Server action for form submission
export async function submitProjectDetails(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log("Form submitted:", data);
  // Add server-side logic here (e.g., save to database)
}

export default function ProjectDetailsForm() {
  const [date, setDate] = useState(new Date());

  return (
    <form action={submitProjectDetails}>
      <Card className="border rounded-xl shadow-lg p-6 w-full max-w-sm bg-white">
        <div className="flex items-center gap-2 text-purple-600 cursor-pointer font-medium">
          <Paperclip className="w-4 h-4" /> Attach a File
        </div>
        <h2 className="text-xl font-semibold mt-4">Project Details</h2>
        
        <CardContent className="mt-4 space-y-4">
          <div>
            <Label htmlFor="subjectArea">Subject Area</Label>
            <select
              name="subjectArea"
              id="subjectArea"
              defaultValue=""
              className="w-full border rounded p-2"
            >
              <option value="" disabled>
                Enter subject area
              </option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
              <option value="subject3">Subject 3</option>
            </select>
          </div>
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <select
              name="projectType"
              id="projectType"
              defaultValue=""
              className="w-full border rounded p-2"
            >
              <option value="" disabled>
                Enter project type
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          
          <div className="bg-purple-600 text-white p-3 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" /> <span>Express Project</span>
            </div>
          </div>

          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <div className="relative">
              <Input
                type="text"
                name="deadline"
                value={date.toLocaleString()}
                readOnly
                className="cursor-pointer bg-gray-100"
              />
              <CalendarIcon className="absolute right-2 top-2 w-5 h-5 text-gray-500" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="wordCount">Number of words</Label>
            <Input
              type="text"
              name="wordCount"
              value="1100 words"
              readOnly
              className="bg-gray-100"
            />
          </div>
          
          <Button variant="ghost" className="text-purple-600">More</Button>
          
          <Button type="submit" className="w-full bg-black text-white py-2 mt-2 rounded-lg">
            Edit Details
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
