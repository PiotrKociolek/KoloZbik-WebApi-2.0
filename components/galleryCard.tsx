"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const GalleryCard =()=>{
    return(
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
                    src="/dzik.jpg"
                />
            </CardBody>
            <CardFooter className="p-4">
                <div>
                    <div>
                        <b className="text-lg font-semibold">Tytuł</b>
                        <p className="text-sm text-gray-500">
                            To jest opis galerii
                        </p>
                    </div>
                    <div>
                        <button className="text-blue-500 hover:underline">Przeglądaj galerie</button>
                    </div>
                </div>

            </CardFooter>
        </Card>


    )
}
export default GalleryCard