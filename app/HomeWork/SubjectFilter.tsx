"use client";

import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SubjectFilter({ selectedSubject }: { selectedSubject: string }) {
  const router = useRouter();

  const handleSubjectChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "all") {
      params.delete("subject");
    } else {
      params.set("subject", value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleSubjectChange} value={selectedSubject}>
      <SelectTrigger className="w-48">
        <span>Select Subject</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Subjects</SelectItem>
        <SelectItem value="math">Math</SelectItem>
        <SelectItem value="science">Science</SelectItem>
        <SelectItem value="history">History</SelectItem>
      </SelectContent>
    </Select>
  );
}
