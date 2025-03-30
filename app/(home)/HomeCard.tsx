import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import site_jabber from "./../../assets/site_jabber.png";
import trust_pilot from "./../../assets/trust_icon.png";
import expert_buddy from "./../../assets/main_logo.png";

const reviews = [
  {
    name: "Trustpilot",
    rating: 4.7,
    stars: 5,
    logo: trust_pilot.src,
  },
  {
    name: "Sitejabber",
    rating: 4.0,
    stars: 4,
    logo: site_jabber.src,
  },
  {
    name: "ExpertBuddy",
    rating: 5.0,
    stars: 5,
    logo: expert_buddy.src, // Replace with actual logo URL
  },
];

export default function HomeCard() {
  return (
    <Card className="p-6 flex flex-col sm:flex-row justify-between items-center gap-6 bg-white shadow-md rounded-xl ml-24 mr-24 ">
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-semibold">150+ Students</h3>
        <p className="text-gray-500">Trusted Us To Write Their Papers</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={review.logo} alt={review.name} className="h-8" />
            <div className="flex flex-col items-start">
              <h1 className="font-medium">{review.name}</h1>
              <div className="flex items-center gap-2">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
                <span className="text-gray-700 font-medium">{review.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
