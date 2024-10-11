"use client"
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [totalUsage, setTotalUsage] = useState<Number>(0);
    const [updateCreditUsage, setupdateCreditUsage] = useState<any>();
    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setupdateCreditUsage }}>
                <div className="bg-gradient-to-br from-sky-200 via-indigo-300 to-blue-200 h-full min-h-screen">
                    <div className="md:w-64 hidden md:block fixed">
                        <SideNav />
                    </div>
                    <div className="md:ml-64">
                        <Header />
                        {children}
                    </div>
                </div>
            </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout