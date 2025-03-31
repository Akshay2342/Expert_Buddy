import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import SetBudget from "./setBudget";
import Link from "next/link";
import CloseButton from "./closeButton";



export default function TutorForm() {
  return (
    <Dialog open>
      <DialogContent className="max-w-3xl p-6">
        <div className="relative">
          <CloseButton /> {/* Place the CloseButton component */}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Form Section (2/3 width) */}
          <div className="col-span-3">
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
                <Input type="date" />
              </div>
              
              <div className="col-span-2">
                <SetBudget />
              </div>
              
              <div className="col-span-2">
                <Link href="/auction">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Choose An Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Content Section (1/3 width) */}
          {/* <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Important Points</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Provide a clear and concise title.</li>
              <li>Describe your project in detail.</li>
              <li>Attach relevant files if necessary.</li>
              <li>Set a realistic deadline and budget.</li>
              <li>Choose the appropriate type and subject.</li>
            </ul>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
