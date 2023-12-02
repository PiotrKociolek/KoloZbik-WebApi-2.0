"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

const ManagementCard3 = () => {
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
                    <p>Bartłomiej</p>
                    <p>Papież</p>
                    <p>Skarbnik</p>
                    <p>kontakt: 883 347 070</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default ManagementCard3
