"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const NewsCard =()=>{

    return (
        <div>
            <Card
                shadow="sm"
                className="rounded-lg overflow-hidden"
            >
                <CardBody className="p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt=""
                        className="w-full object-cover h-48"
                        src="/jelen.jpg"
                    />
                </CardBody>
                <CardFooter className="p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <b className="text-lg font-semibold">Tytuł</b>
                                <p className="text-sm text-gray-500">
                                    Polowanie na jelenie to aktywność, która od wieków przyciąga zarówno miłośników przyrody, jak i pasjonatów łowiectwa. To nie tylko fascynująca forma spędzania czasu na świeżym powietrzu, ale również ważne narzędzie w zarządzaniu populacją jeleni i ochrony ekosystemów leśnych.
                                </p>
                            </div>
                            <div>
                                <button className="text-blue-500 hover:underline">Czytaj więcej</button>
                            </div>
                        </div>
                        <div>
                            <button className="text-green-600 hover:underline">Modyfikuj</button>
                            <button className="text-red-800 hover:underline">Usuń</button>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );

}
export default NewsCard