"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import ManagementCard from "@/components/ManagemenetCard";
import RewizyjnaCard from "@/components/komisjaRewizyjna";
import ManagementCard1 from "@/components/ManagementCard1";
import ManagementCard2 from "@/components/ManagementCard2";
import ManagementCard3 from "@/components/ManagementCard3";
import ManagementCard5 from "@/components/ManagementCard5";
import ManagementCard4 from "@/components/ManagementCard4";

const ManagementSection = () => {
    return (
        <div>

            <h3 style={{ textAlign: 'center' }}>Zarząd Koła</h3>
            <ManagementCard1 />
            <ManagementCard2 />
            <ManagementCard3 />
            <ManagementCard4 />
            <ManagementCard5 />
            <div className="opacity-0 ">
                <h3 style={{ textAlign: 'center' }}>Komisja Rewizyjna</h3>
                <ManagementCard />
                <ManagementCard />
                <ManagementCard />
            </div>

        </div>
    );
}

export default ManagementSection;