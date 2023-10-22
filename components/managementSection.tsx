"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import ManagementCard from "@/components/ManagemenetCard";

const ManagementSection = () => {
    //wyswietlic zarząd jak i komisje rewizyjną
    return (
        <div>
            <h1>Zarząd Koła</h1>
            <ManagementCard/>
            <ManagementCard/>
            <ManagementCard/>
            <ManagementCard/>
            <ManagementCard/>

            <h1>Komisja Rewizyjna</h1>
            <ManagementCard/>
            <ManagementCard/>
            <ManagementCard/>
        </div>

    );
}
export default ManagementSection