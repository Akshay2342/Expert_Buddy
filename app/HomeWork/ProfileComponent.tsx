"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProfileCalendar() {
  const [date, setDate] = useState<Date | null>(new Date("2024-12-19"));

  return (
    <div className="space-y-2 w-80">
      {/* Profile Card */}
      <Card className="border rounded-xl shadow-lg p-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20 rounded-md">
            <AvatarImage src="/path-to-profile.jpg" alt="Profile" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">Aspen Stanton</h3>
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
          </div>
        </div>
        <CardContent className="mt-4 border-t pt-2">
          <div className="flex justify-between items-center text-sm font-medium">
            <span>Notifications</span>
            <Button variant="link" className="text-purple-600 p-0">View all</Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">No new notifications</p>
        </CardContent>
      </Card>
      
      {/* Calendar Card */}
      <Card className="border rounded-xl shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Calendar</h3>
        <div className="flex justify-between items-center text-sm font-medium">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span>December 2024</span>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <CardContent className="p-0">
          <Calendar
            selected={date}
            onSelect={(day: Date | undefined) => day && setDate(day)}
            className="border-none"
          />
        </CardContent>
      </Card>
    </div>
  );
}
