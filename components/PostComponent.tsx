"use client"

import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { CardHeader } from "@nextui-org/card";

// Typowanie propsów
interface PostComponentProps {
    title: string;
    content: string;
    images: {
        id: string;
        fileExtension: string;
        obfuscatedFileName: string;
        setTitleImgId: string | null;
    }[];
}

const PostComponent = ({ title, content, images }: PostComponentProps) => {
    // Funkcja generująca URL dla obrazu
    const imageUrl = (fileName: string) => `${process.env.NEXT_PUBLIC_API_URL}/uploads/${fileName}.jpg`;

    return (
        <div>
            <Card className="shadow-md rounded-lg p-4 m-4">
                <CardHeader className="text-center">{title}</CardHeader>
                <CardBody className="p-4">
                    <p className="text-gray-200 leading-6">
                        {content}
                    </p>
                    <div className="mt-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Wyświetlanie obrazków */}
                        {images.map((image, index) => (
                            <Image
                                key={image.id}
                                src={imageUrl(image.obfuscatedFileName)} // Generowanie URL
                                alt={`Post image ${index + 1}`}
                                className="w-full h-auto rounded-lg"
                            />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default PostComponent;
