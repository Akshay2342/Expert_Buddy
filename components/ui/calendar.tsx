"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface CalendarProps {
  selected: Date | null;
  onSelect: (day: Date | undefined) => void;
  className?: string;
  showOutsideDays?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  className,
  showOutsideDays = true,
  ...props
}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date())

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const startDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
  }

  const renderDays = () => {
    const days = []
    const totalDays = daysInMonth(currentDate)
    const startDay = startDayOfMonth(currentDate)

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8" />)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <button
          key={day}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-8 h-8 text-sm"
          )}
          onClick={() => onSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          {day}
        </button>
      )
    }

    return days
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p-2 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button
          onClick={handleNextMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p-2 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-xs font-medium text-center">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  )
}
