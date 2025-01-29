"use client"

import {Card, CardBody, Image} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";
import React from "react";

const MapCard  = ()=>{
    return(
        <div className="flex flex-col items-center h-screen">
            <Card>
                <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
                    <h3 className="text-tiny uppercase font-bold">Mapa Obwodu 197</h3>
                </CardHeader>
                <CardBody className="py-2">
                    <Image
                        alt=""
                        className="object-contain "
                        src="/Map1.PNG"
                    />
                </CardBody>
            </Card>
        </div>


    )
}
export default MapCard