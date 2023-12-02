"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

const ManagementCard2 = () => {
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
                    <p>Hubert</p>
                    <p>Wojnarowski</p>
                    <p>Łowczy</p>
                    <p>kontakt:</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default ManagementCard2
