import { X } from "lucide-react";
import Link from "next/link";

export default function CloseButton() {
  return (
    <Link
      href="/"
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    >
      <X className="w-5 h-5" />
    </Link>
  );
}
