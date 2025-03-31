"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function SetBudget() {
  const [budget, setBudget] = useState(65);

  const incrementBudget = () => setBudget(budget + 1);
  const decrementBudget = () => setBudget(budget > 0 ? budget - 1 : 0);

  return (
    <div className="col-span-2">
      <label className="block text-sm font-medium">Set an Approximate Budget</label>
      <div className="flex items-center">
        <Button variant="outline" size="sm" onClick={decrementBudget}>
          <span className="w-4 h-4 font-bold">-</span> {/* Minus symbol */}
        </Button>
        <Input
          type="text"
          value={`$ ${budget}`}
          readOnly
          className="text-center mx-2"
        />
        <Button variant="outline" size="sm" onClick={incrementBudget}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-gray-500 text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  );
}
