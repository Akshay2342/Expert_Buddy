"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CalendarIcon, Paperclip, Zap } from "lucide-react";

export default function ProjectDetailsForm() {
  const [date, setDate] = useState(new Date());

  return (
    <Card className="border rounded-xl shadow-lg p-6 w-full max-w-sm bg-white">
      <div className="flex items-center gap-2 text-purple-600 cursor-pointer font-medium">
        <Paperclip className="w-4 h-4" /> Attach a File
      </div>
      <h2 className="text-xl font-semibold mt-4">Project Details</h2>
      
      <CardContent className="mt-4 space-y-4">
        <div>
          <Label>Subject Area</Label>
          <Select>
            <SelectTrigger className="w-full">Enter subject area</SelectTrigger>
            <SelectContent>
              <SelectItem value="subject1">Subject 1</SelectItem>
              <SelectItem value="subject2">Subject 2</SelectItem>
              <SelectItem value="subject3">Subject 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Project Type</Label>
          <Select>
            <SelectTrigger className="w-full">Enter project type</SelectTrigger>
            <SelectContent>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="type3">Type 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="bg-purple-600 text-white p-3 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" /> <span>Express Project</span>
          </div>
        </div>

        <div>
          <Label>Deadline</Label>
          <div className="relative">
            <Input
              type="text"
              value={date.toLocaleString()}
              readOnly
              className="cursor-pointer bg-gray-100"
            />
            <CalendarIcon className="absolute right-2 top-2 w-5 h-5 text-gray-500" />
          </div>
        </div>
        
        <div>
          <Label>Number of words</Label>
          <Input type="text" value="1100 words" readOnly className="bg-gray-100" />
        </div>
        
        <Button variant="ghost" className="text-purple-600">More</Button>
        
        <Button className="w-full bg-black text-white py-2 mt-2 rounded-lg">Edit Details</Button>
      </CardContent>
    </Card>
  );
}
