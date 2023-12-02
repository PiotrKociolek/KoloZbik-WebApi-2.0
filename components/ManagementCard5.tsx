"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

const ManagementCard5 = () => {
    return (
        <div className=" inline-grid grid-cols-1 gap-10">
            <Card className="col-span-1 m-4">
                <CardHeader>
                    <Image alt="Card background"
                           className="object-cover rounded-xl"
                           src="/member.jpg"
                           width={270}/>
                </CardHeader>
                <CardBody>
                    <p>Artur</p>
                    <p>Kocemba</p>
                    <p>Skarbnik</p>
                    <p>kontakt:</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default ManagementCard5
