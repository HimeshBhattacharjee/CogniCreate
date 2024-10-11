"use client"
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <Link href={"/"}>
        <Button
          className="bg-gradient-to-r from-indigo-700 to-blue-400 rounded-full
          hover:text-black hover:scale-105 duration-500">
          <ArrowLeft />Back to Main Page</Button>
      </Link>
      <div className="flex gap-5 items-center">
        <Link href={"/dashboard/billing"}>
          <h2
            className="bg-gradient-to-r from-indigo-700 to-blue-400 p-3 rounded-full text-xs
           text-white cursor-pointer hover:text-black hover:scale-105 duration-500">
            🔥Join Prime for Rs.99/month
          </h2>
        </Link>
        <UserButton />
      </div>
    </div>
  )
}

export default Header;
