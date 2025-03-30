"use client"

import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExpertCarousel() {
  const items = [
    {
      title: "🔬 Huge Community of Experts",
      description:
        "We bring together verified college professors, practicing scientists, independent researchers, and thousands of experts to share their knowledge and provide academic assistance.",
    },
    {
      title: "💰 Affordable Prices",
      description:
        "We use AI-based tools to optimize plagiarism checking and grammar checking, ensuring expert assistance of exceptional quality at affordable rates.",
    },
    {
      title: "🔒 Data Security",
      description:
        "We care about your security, therefore we encrypt all personal data to make every user feel safe while using XpertBuddy. We don't share any personal information with any third parties without your permission.",
    },
    {
      title: "💳 Safe Payment Methods",
      description:
        "We use fast, convenient, modern, and safe payment tools and solutions, such as PayPal, Payoneer, and Visa/Mastercard, for payments and withdrawals. We're constantly working on adding more options. Also, you can pay the entire amount at once or in two installments if it's more convenient for you.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="py-12 px-6 text-center">
      <h1 className="text-3xl font-bold">Studybay anywhere with ExpertBuddy</h1>
      <div className="mt-8 mx-auto w-2/3">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-2">
              <Card className="p-6 text-left bg-white shadow-lg rounded-lg h-48">
                <CardContent>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
