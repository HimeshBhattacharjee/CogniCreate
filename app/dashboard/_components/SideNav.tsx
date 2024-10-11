"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';

function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard"
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: "/dashboard/billing"
        },
        {
            name: "Setting",
            icon: Settings,
            path: "/dashboard/settings"
        },
    ]
    const path = usePathname();
    const router = useRouter();
    useEffect(() => {
        console.log(path);
    }, [])
    const handleMenuClick = (menuPath: string) => {
        router.push(menuPath); // Navigate to the selected path
    };
    return (
        <div className="h-screen relative pt-1 p-5 shadow-sm">
            <div className="flex justify-center">
                <Image src={"/Logo.png"} alt="CogniCreate" width={140} height={140} />
            </div>
            <div className="mt-1 mb-8">
                {MenuList.map((menu, index) => (
                    <div key={index} className={`flex gap-2 mb-2 p-3 text-black
                    hover:bg-gradient-to-tl from-purple-600 to-primary hover:text-white rounded-lg
                    cursor-pointer items-center ${path === menu.path && 'bg-gradient-to-tr from-purple-600 to-primary text-white'}`}
                        onClick={() => handleMenuClick(menu.path)}>
                        <menu.icon className="h-6 w-6" />
                        <h2 className="text-lg">{menu.name}</h2>
                    </div>
                ))}
            </div>
            <div className="absolute left-0 w-full">
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav