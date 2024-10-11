"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { aiOutput } from '@/utils/schema';
import React, { useContext, useEffect } from 'react';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { updateCreditUsage, setupdateCreditUsage } = useContext(UpdateCreditUsageContext);
    useEffect(() => {
        user && getData();
    }, [user]);
    useEffect(() => {
        user && getData();
    }, [updateCreditUsage])
    const getData = async () => {
        {/* @ts-ignore */ }
        const result: HISTORY[] = await db.select().from(aiOutput)
            .where(eq(aiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
        getTotalUsage(result)
    }
    const getTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.AIResponse?.length)
        });
        setTotalUsage(total);
    }
    return (
        <div className="m-5">
            <div className="bg-gradient-to-tr from-purple-600 to-primary text-white rounded-lg p-3">
                <h2 className="font-medium">Credits</h2>
                <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full"
                        style={{
                            width: (totalUsage / 10000) * 100 + "%"
                        }}>
                    </div>
                </div>
                <h2 className="text-sm my-2">{totalUsage}/10,000 Credit Used</h2>
            </div>
            <Link href={"/dashboard/billing"}>
                <Button variant={'secondary'} className="font-extrabold w-full my-3 text-primary bg-gradient-to-r from-white to-indigo-400 hover:text-black hover:scale-105 duration-500">Upgrade</Button>
            </Link>
        </div>
    )
}

export default UsageTrack