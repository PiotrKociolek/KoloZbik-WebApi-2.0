"use client"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import ManagementCard from "@/components/ManagemenetCard";

const ManagementSection = () => {
    return (
        <div>
            <h1 className="text-4xl text-center text-amber-200">Zarząd Koła</h1>
            <ManagementCard />
        </div>
    );
}

export default ManagementSection;
