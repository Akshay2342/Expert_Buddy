import React from 'react';
import Image from 'next/image';
import logo from '../../assets/main_logo.png'; // Adjust the path as necessary
import Link from 'next/link';
import purse from '../../assets/purse_vec.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }  from '../ui/select';
import chat_vector from '../../assets/final_chat.png'
import chat_query from '../../assets/query_chat.png'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"

export default function NavBar({ showTutor }: { showTutor: boolean }) {
    return (
        <nav className="flex flex-wrap items-center justify-between bg-white shadow-md px-4 py-2 border border-blue-300">
            {/* Left Section: Logo and "Buddy" */}
            <div className="flex items-center space-x-2 ml-4 md:ml-10">
                <Image 
                    src={logo}
                    alt="Logo" 
                    width={30} 
                    height={30} 
                    className="rounded-full cursor-pointer"
                />
                <div className="text-purple-600 font-bold text-lg md:text-xl">BUDDY</div>
            </div>

            {/* Right Section: Links and Buttons */}
            <div className="flex flex-wrap items-center space-x-4 justify-end mt-2 md:mt-0">
                <Link href="/?showTutor=true" className="text-gray-600 hover:text-purple-600 text-sm md:text-base">
                    <span className="hidden md:inline">Find Tutor</span>
                </Link>
                <Link href="/HomeWork" className="text-purple-600 font-semibold text-sm md:text-base">Homework</Link>
                <div className="flex items-center bg-yellow-100 text-yellow-500 px-3 py-1 rounded-full text-sm md:text-base">
                    <span>0 USD</span>
                </div>
                <button className="border border-purple-400 text-purple-600 px-2 py-1 rounded-md hover:bg-purple-100 text-sm md:text-base cursor-pointer">
                    Refer a Friend
                </button>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Select>
                        <SelectTrigger className="w-28 md:w-32 cursor-pointer">
                            <SelectValue placeholder="English, USD" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en-usd" className="cursor-pointer">English, USD</SelectItem>
                            <SelectItem value="en-eur" className="cursor-pointer">English, EUR</SelectItem>
                            <SelectItem value="fr-eur" className="cursor-pointer">French, EUR</SelectItem>
                            <SelectItem value="es-usd" className="cursor-pointer">Spanish, USD</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex space-x-2">
                        <Image
                          src={chat_vector}
                          alt="Chat"
                          width={24}
                          height={16}
                          className="rounded-full cursor-pointer"
                        />
                        <Image
                          src={chat_query}
                          alt="Chat"
                          width={26}
                          height={22}
                          className="rounded-full cursor-pointer"
                        />
                    </div>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
}