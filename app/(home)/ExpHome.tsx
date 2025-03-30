import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import MoneyBack from '../../assets/Money_back_icon.png';
import Support from '../../assets/24_7_icon.png';
import NoHiddenCharges from '../../assets/no_money_charge.png';
import ReachOutExpert from '../../assets/reach_out_expert.png';

export default function ExpertHome() {
  return (
    <div className="bg-[#F266CD] text-black py-20 px-6 relative h-100">
      <div className="flex flex-wrap justify-between items-start">
        {/* Left Half: Reach Out Content */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-12">
          <h1 className="text-3xl font-bold">Reach Out to the Expert Now</h1>
          <p className="mt-2">
            Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Input
              className="w-64 bg-[#F5F3EF] rounded-md"
              placeholder="Personal Self-Care Plan"
            />
            <div className="relative w-64">
              <Input
                type="date"
                className="w-full bg-[#F5F3EF] rounded-md placeholder-gray-500"
                placeholder="Choose deadline"
              />
            </div>
            <Button className="bg-black text-white">Find an Expert</Button>
          </div>
        </div>

        {/* Right Half: Single Box */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-300 rounded-md">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <Image
                src={ReachOutExpert}
                alt="Reach Out to Expert"
                className="absolute w-80 h-80 rounded-md mt-30"
            />
          </div>
        </div>
      </div>

      {/* Flexbox for Logos */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 mt-20 w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-md"
        style={{ top: "60%" }}
      >
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <Image src={MoneyBack} alt="Money-Back Guarantee" className="w-12 h-12" />
            <p className="mt-2 text-md text-[#640D51] font-semibold">Money-Back Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Support} alt="Support 24/7" className="w-12 h-12" />
            <p className="mt-2 text-md text-[#640D51] font-semibold">Support 24/7</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={NoHiddenCharges} alt="No Hidden Charges" className="w-12 h-12" />
            <p className="mt-2 text-md text-[#640D51] font-semibold">No Hidden Charges</p>
          </div>
        </div>


      </div>
    </div>
  );
}
