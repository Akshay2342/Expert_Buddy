import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function HomeworkHelp() {
  return (
    <div
      className="mx-auto p-6 mt-4 text-left" // Changed text alignment to left
      style={{ width: "500px", height: "609px" }} // Applied fixed width and height
    >
      <h1 className="text-4xl font-bold mb-4">A-Plus Homework Help For All</h1>
      <p className="text-gray-600 mb-6">
        Get personalized expert assistance in any academic field. 100+ courses and programs covered.
      </p>
      
      <Textarea
        className="w-full bg-white border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-purple-500 resize-y" // Added resize-y for variable height
        placeholder="Describe your project briefly"
        style={{ height: "150px" }} // Set initial height
      />
      
      <div className="flex items-center justify-start mt-4">
        <Switch id="human-experts" className="mr-2 bg-gray-200 checked:bg-white border-gray-400" />
        <label htmlFor="human-experts" className="text-gray-800 font-medium">Human experts only</label>
      </div>
      
      <p className="mt-4 text-lg font-semibold">
        Get Offers <span className="text-purple-600 font-bold">For FREE & Pay Only</span> When You Accept An Offer!
      </p>
      
      <Button className="mt-6 bg-purple-600 hover:bg-purple-700">
        Find an Expert
      </Button>
    </div>
  );
}
