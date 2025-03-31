import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, TagIcon } from "lucide-react";

const HomeWorkCard = ({ title, deadline, bids, price, tags }: { title: string; deadline: string; bids: number; price: number; tags?: string[] }) => {
  return (
    <Card className="p-2 shadow-lg rounded-lg border">
      <div className="flex justify-between">
        <Badge variant="destructive">At the Auction</Badge>
      </div>
      <CardContent >
        <div className="flex">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <CalendarIcon className="w-4 h-4 text-purple-600" />
              <span>Deadline: {deadline}</span>
            </div>
            <h2 className="text-lg font-semibold text-purple-800">{title}</h2>
            <div className="flex flex-wrap gap-2">
              {(tags && tags?.length > 0) ? (
                tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))
              ) : (
                <Badge variant="outline" className="text-sm">No Tags</Badge>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <TagIcon className="w-4 h-4 text-purple-600" />
              <span>ID: 3744728</span>
            </div>
            <div className="text-right space-y-2">
              <p className="text-lg text-gray-500 font-medium">{bids} Bid{bids !== 1 ? "s" : ""}</p>
              <span className="text-2xl font-bold">${price}</span>
              <p className="text-xl text-green-600 font-semibold">Best Offer</p>
            </div>
            <Button className="bg-purple-600 text-white px-4 py-2">Check the Offers</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeWorkCard;
