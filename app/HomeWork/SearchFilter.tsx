"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import HomeWorkCard from "./HomeWorkCard";

export default function SearchFilter({ homeWorks }: { homeWorks: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHomeWorks = homeWorks.filter((homeWork: any) => {
    const matchesSearch =
      homeWork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      homeWork.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div>
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search by Name, Description, or Tags"
          className="flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className="px-4 py-2 bg-black text-white flex items-center gap-2">
          <Search className="w-4 h-4" /> Search
        </Button>
      </div>

      <div className="space-y-4 mt-4">
        {filteredHomeWorks.map((homeWork: any) => (
          <HomeWorkCard key={homeWork.id} {...homeWork} />
        ))}
      </div>
    </div>
  );
}
