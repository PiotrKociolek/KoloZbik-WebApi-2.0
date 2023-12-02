"use client"

import {Card, CardFooter, Divider} from "@nextui-org/react";

const Footer =()=>{
    return(
        <div>
        <Divider orientation="horizontal"/>
            <div className="grid grid-cols-2 justify-center">
                <div className="flex items-center">
                    <p className="mr-2">©2023 Koło Łowieckie Żbik.</p>
                    <div className="ml-2">
                        <p> <a href="https://www.linkedin.com/in/piotr-kociolek-4ba007279">Strone Wykonał: kol. Piotr Kociołek</a></p>
                    </div>
                </div>
            </div>
        </div>
            )
}
export default Footer