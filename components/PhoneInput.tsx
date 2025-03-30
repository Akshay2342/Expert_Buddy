"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
type E164Number = string; // Define E164Number as a string type
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Import ShadCN Input
import { Label } from "@/components/ui/label"; // Import ShadCN Label

function PhoneInputt() {

  const [value, setValue] = useState<E164Number | undefined>();

  return (
    <div className="space-y-2 w-full">
      {/* <Label htmlFor="phone-input">Phone Number</Label> */}
      <PhoneInput
        id="phone-input"
        placeholder="Enter phone number"
        value={value}
        defaultCountry="US"
        onChange={setValue}
        inputComponent={Input} // Use ShadCN Input for styling
        className="border rounded-md p-2 " // Optional additional styling
      />
    </div>
  );
}

export default PhoneInputt;