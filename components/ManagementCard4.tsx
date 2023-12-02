"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

const ManagementCard4 = () => {
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
                    <p>Zygmunt</p>
                    <p>Burnagiel</p>
                    <p>Zastępca Łowczego</p>
                    <p>kontakt:</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default ManagementCard4
