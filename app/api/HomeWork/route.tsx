import { NextResponse } from "next/server";

export async function GET() {
  const homeWorks = [
    { id: 1, title: "Homework 1", deadline: "January 31, 2025, 11:30 AM", bids: 1, price: 90, tags: ["Criminology", "Personal Statement"] },
    { id: 2, title: "Homework 2", deadline: "February 15, 2025, 10:00 AM", bids: 2, price: 120, tags: ["Mathematics", "Algebra"] },
    { id: 3, title: "Homework 3", deadline: "March 10, 2025, 2:00 PM", bids: 0, price: 0, tags: ["Science", "Physics"] },
    { id: 4, title: "Homework 4", deadline: "April 5, 2025, 5:00 PM", bids: 3, price: 150, tags: [] }, // Example with empty tags
  ];
  return NextResponse.json(homeWorks);
}
