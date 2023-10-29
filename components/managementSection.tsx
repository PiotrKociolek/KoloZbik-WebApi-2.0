"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import ManagementCard from "@/components/ManagemenetCard";

const ManagementSection = () => {
    return (
        <div>
            <></>
            <h3 style={{ textAlign: 'center' }}>Zarząd Koła</h3>
            <ManagementCard />
            <ManagementCard />
            <ManagementCard />
            <ManagementCard />
            <ManagementCard />

            <h3 style={{ textAlign: 'center' }}>Komisja Rewizyjna</h3>
            <ManagementCard />
            <ManagementCard />
            <ManagementCard />
        </div>
    );
}

export default ManagementSection;