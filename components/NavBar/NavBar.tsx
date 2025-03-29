import React from 'react';
import Image from 'next/image';
import logo from '../../assets/main_logo.png'; // Adjust the path as necessary
import Link from 'next/link';
import purse from '../../assets/purse_vec.png'

export default function NavBar({ showTutor }: { showTutor: boolean }) {
    return (
        <nav className="flex items-center justify-between bg-white shadow-md px-4 py-2 border border-blue-300">
            {/* Left Section: Logo and "Buddy" */}
            <div className="flex items-center space-x-2 ml-10">
                <Image 
                    src={logo}
                    alt="Logo" 
                    width={30} 
                    height={30} 
                    className="rounded-full"
                />
                <div className="text-purple-600 font-bold text-xl">BUDDY</div>
            </div>

            {/* Right Section: Links and Buttons */}
            <div className="flex items-center space-x-4 justify-end">
                <Link href="/?showTutor=true" className="text-gray-600 hover:text-purple-600">
                    <span className="hidden md:inline">Find Tutor</span>
                </Link>
                <Link href="/HomeWork" className="text-purple-600 font-semibold">Homework</Link>
                <div className="flex items-center bg-yellow-100 text-yellow-500 px-3 py-1 rounded-full">
                {/* <Image 
                    src={purse}
                    alt="Purse" 
                    width={20} 
                    height={20} 
                    className="rounded-full"
                /> */}
                    <span>0 USD</span>
                </div>
                <button className="border border-purple-400 text-purple-600 px-3 py-1 rounded-md hover:bg-purple-100">
                    Refer a Friend
                </button>
                <div className="flex items-center space-x-2">
                    <span>English, USD</span>
                    <div className="flex space-x-2">
                        <button>&#x1F4AC;</button>
                        <button>&#x2753;</button>
                        <button>&#x1F514;</button>
                    </div>
                    <Image 
                        src="/profile-placeholder.png" 
                        alt="User" 
                        width={40} 
                        height={40} 
                        className="rounded-full"
                    />
                </div>
            </div>
        </nav>
    );
}