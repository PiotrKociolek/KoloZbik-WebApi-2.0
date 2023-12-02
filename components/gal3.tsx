"use client"
import {Button, Card, CardBody, CardFooter, Image,Link } from "@nextui-org/react";

const Gallery3 = () => {
    return (
        <Card
            shadow="sm"
            isPressable
            onPress={() => console.log("item pressed")}
            className="rounded-lg overflow-hidden"
        >
            <CardBody className="p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt=""
                    className="w-full object-cover h-48"
                    src="/kolBurnagiel60.jpg"
                />
            </CardBody>
            <CardFooter className="p-4">
                <div>
                    <div>
                        <b className="text-lg font-semibold">Zdjęcia udostępnione przez kol. Zygmunta Burnagla</b>
                        <p className="text-sm text-gray-500"></p>
                    </div>
                    <div>
                        <Link href="/gal3">Przeglądaj galerie</Link>

                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Gallery3;
