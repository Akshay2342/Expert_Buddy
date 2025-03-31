import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle } from "lucide-react";
import Image from "next/image";

interface TutorCardProps {
  name: string;
  countryFlag: string;
  tutorImage: string;
  badgeText: string;
  experience: string;
  rating: number;
  reviews: number;
  description: string;
  completedProjects: number;
  totalProjects: number;
  price: number;
  discountedPrice: number;
}

export default function TutorCard({
  name,
  countryFlag = "/assets/flag-america.png", // Default to a placeholder image for country flag
  tutorImage = "/assets/person-placeholder.jpg", // Default to the person image in assets
  badgeText,
  experience,
  rating = 0,
  reviews,
  description,
  completedProjects,
  totalProjects,
  price,
  discountedPrice,
}: TutorCardProps) {
  return (
    <Card className="border rounded-xl shadow-lg w-full relative">
      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Best Offer</div>
      <div className="absolute top-2 right-2 text-right">
        <p className="text-lg font-bold">Price <span className="text-purple-600">${price}</span></p>
        <p className="text-sm text-gray-500">Pay now only <span className="text-green-600">${discountedPrice}</span></p>
      </div>
      <div className="flex gap-4">
        <Image
          src={tutorImage} // Use the provided image or default to the placeholder
          alt="Tutor"
          width={96}
          height={96}
          className="w-24 h-24 rounded-lg object-cover border"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{name}</h3>
            <Image
              src={countryFlag} // Country flag from props or placeholder
              alt="Country Flag"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <Badge variant="secondary" className="w-fit mt-1">{badgeText}</Badge>
          <p className="text-sm text-gray-500">{experience}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500">({reviews} Reviews)</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <p className="text-xs text-gray-500 mt-1">
            Completed <span className="font-semibold">{completedProjects}</span> projects out of <span className="font-semibold">{totalProjects}</span>
          </p>
        </div>
      </div>
      <CardContent className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Hire This Expert</Button>
          <Button variant="outline" className="px-4 py-2 flex items-center gap-1">
            <MessageCircle className="w-4 h-4" /> Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
