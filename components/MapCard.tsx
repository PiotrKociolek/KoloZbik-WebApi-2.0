"use client"

import {Card, CardBody, Image} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";
import React from "react";

const MapCard  = ()=>{
    return(
        <div className="flex flex-col items-center h-screen">
            <Card>
                <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
                    <h3 className="text-tiny uppercase font-bold">Mapa Przykładowego obwodu 420</h3>
                    <h3 className="font-bold text-small">Przykładowy opis</h3>
                </CardHeader>
                <CardBody className="py-2">
                    <Image
                        alt=""
                        className="object-contain "
                        src="/map1.png"
                    />
                </CardBody>
            </Card>
        </div>


    )
}
export default MapCard