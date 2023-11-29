"use client"
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

const RewizyjnaCard =()=>{
    return(
        <div className=" inline-grid grid-cols-1 gap-10">
            <Card className="col-span-1 m-4">
                <CardHeader>
                    <Image alt="Card background"
                           className="object-cover rounded-xl"
                           src="/member.jpg"
                           width={270}/>
                </CardHeader>
                <CardBody>
                    <p>Imie</p>
                    <p>Nazwisko</p>
                    <p>Rola:</p>
                    <p>kontakt</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default RewizyjnaCard