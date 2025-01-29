"use client"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

const NewsCard = () => {
    const router = useRouter();

    // Stałe dane
    const title = "Tytuł artykułu";
    const imageUrl = "/jelen.jpg"; // Ścieżka do obrazu
    const handleNavigate = () => {
        router.push("/news");  // Tutaj możemy dodać, na jaką stronę ma prowadzić kliknięcie
    };

    return (
        <Card
            shadow="sm"
            isPressable
            onPress={handleNavigate}  // Przekierowanie po kliknięciu na całą kartę
            className="rounded-lg overflow-hidden bg-gray-800"
        >
            <CardBody className="p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={title}
                    className="w-full object-cover h-48"
                    src={imageUrl}
                />
            </CardBody>
            <CardFooter className="p-4">
                <div>
                    <b className="text-lg font-semibold text-white">{title}</b>  {/* Tylko tytuł */}
                    <div>
                        <button
                            className="text-blue-500 hover:underline mt-2"
                            onClick={handleNavigate}
                        >
                            Czytaj więcej
                        </button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default NewsCard;
