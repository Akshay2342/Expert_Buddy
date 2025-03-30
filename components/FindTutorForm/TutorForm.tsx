import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Plus, X } from "lucide-react";

export default function TutorForm() {
  return (
    <Dialog open>
      <DialogContent className="w-full max-w-[1200px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Welcome XpertBuddy</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium">Title</label>
            <Input type="text" placeholder="I need help in java tutors for online test" />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium">Content</label>
            <Textarea className="w-full" placeholder="Describe your project..." defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry..." />
            <div className="flex items-center mt-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Plus className="w-4 h-4" /> Attach File
              </Button>
              <div className="flex items-center bg-purple-100 text-purple-600 px-2 py-1 rounded-md ml-2">
                document01.pdf <X className="w-4 h-4 ml-1 cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essay">Essay</SelectItem>
                <SelectItem value="report">Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="others">Others</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Number of Words</label>
            <Input type="number" defaultValue="1100" />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Deadline</label>
            <Calendar />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium">Set an Approximate Budget</label>
            <div className="flex items-center">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
              <Input type="text" defaultValue="$ 65" className="text-center mx-2" />
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          
          <Button className="col-span-2 bg-purple-600 hover:bg-purple-700">Choose An Expert</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}