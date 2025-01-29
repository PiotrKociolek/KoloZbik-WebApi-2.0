"use client"
import ZbikBgImage from "@/components/zbikBgImage";
import React from "react";
import HistoryCardShort from "@/components/historyCardShort";
import {Navbar} from "@nextui-org/react";
import ZbikNavbar from "@/components/zbikNavbar";
import GridNewsDashboard from "@/components/GridNewsDashboard";
import AdminNavbar from "@/components/adminNavbar";
import Footer from "@/components/footer";

const Dashboard = () => {
    return (
        <div className="">
            <ZbikNavbar />
            <div className="grid gap-3 grid-cols-1 grid-rows-2">
                <div className="row-start-1 row-span-1">
                    <ZbikBgImage />
                </div>
                <div className="row-start-2 row-span-1">
                    {/* GridNewsDashboard zajmujący pełną szerokość ekranu */}
                    <div className="w-full">
                        <GridNewsDashboard />
                    </div>
                    <h1 className="opacity-0">_____________________________</h1>
                    <HistoryCardShort />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
