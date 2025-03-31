import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import HomeWorkCard from "./HomeWorkCard";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import SubjectFilter from "./SubjectFilter";
import SearchFilter from "./SearchFilter";

export default async function ActiveProjects({ searchParams = {} }: { searchParams?: { subject?: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const selectedSubject = searchParams.subject || "all";

  const response = await fetch(`${baseUrl}/api/HomeWork`);
  const homeWorks = await response.json();

  const filteredHomeWorks = selectedSubject === "all"
    ? homeWorks
    : homeWorks.filter((homeWork: any) => homeWork.subject === selectedSubject);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Active Projects</h1>
        <Button variant="link" className="text-black">View all projects</Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="all">All ({homeWorks.length})</TabsTrigger>
          <TabsTrigger value="auction">At the Auction (1)</TabsTrigger>
          <TabsTrigger value="process">In Process (0)</TabsTrigger>
          <TabsTrigger value="warranty">Under Warranty (0)</TabsTrigger>
          <TabsTrigger value="completed">Completed (0)</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <SubjectFilter selectedSubject={selectedSubject} />
      
      <SearchFilter homeWorks={filteredHomeWorks} />
    </div>
  );
}
