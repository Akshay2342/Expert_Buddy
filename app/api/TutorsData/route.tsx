import { Playwrite_BE_VLG } from "next/font/google";
import { NextResponse } from "next/server";

export async function GET() {
  const mockTutors = [
    {
      name: "Parvipan Deep S.",
      countryFlag: "/assets/flag-america.png",
      tutorImage: "/assets/person-placeholder.jpg",
      badgeText: "SUPER TUTOR",
      experience: "15 Years of exp. overall",
      rating: 5.0,
      reviews: 298,
      description: "CELTA Certified English Pro With 10+ Years Exp. 🇬🇧 4000+ Expertly Lessons 📚 General, Business, Exams, Young Learners 🏆",
      completedProjects: 31,
      totalProjects: 1240,
      price: 90,
      discountedPrice: 36,
    },
    {
      name: "Sophia L.",
      countryFlag: "/assets/flag-uk.png",
      tutorImage: "/assets/person-placeholder.jpg",
      badgeText: "EXPERT TUTOR",
      experience: "10 Years of exp. overall",
      rating: 4.8,
      reviews: 210,
      description: "IELTS Specialist with 8+ Years Exp. 🇬🇧 3000+ Lessons 📚 General, Business, Exams 🏆",
      completedProjects: 25,
      totalProjects: 980,
      price: 75,
      discountedPrice: 30,
    },
    {
      name: "John D.",
      countryFlag: "/assets/flag-canada.png",
      tutorImage: "/assets/person-placeholder.jpg",
      badgeText: "CERTIFIED TUTOR",
      experience: "12 Years of exp. overall",
      rating: 4.9,
      reviews: 150,
      description: "TOEFL Trainer with 12+ Years Exp. 🇨🇦 2000+ Lessons 📚 General, Business, Exams 🏆",
      completedProjects: 40,
      totalProjects: 1100,
      price: 85,
      discountedPrice: 34,
    },
  ];
  console.log("Fetching mock tutors data...");
  console.log({mockTutors})
  return NextResponse.json(mockTutors);
}
