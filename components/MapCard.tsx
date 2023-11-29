"use client";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { CardHeader } from "@nextui-org/card";
import React from "react";

const MapCard = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <Card>
                <CardBody className="py-2">
                    <Image
                        alt=""
                        className="object-contain"
                        src="/obwód197.PNG"
                    />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-2 flex-col items-start">
                    <p className="text-lg uppercase font-bold mb-1">Mapa obwodu 197</p>
                </CardFooter>
            </Card>
        </div>
    );
};


export default MapCard;
