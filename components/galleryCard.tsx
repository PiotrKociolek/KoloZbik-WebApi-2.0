import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface GalleryCardProps {
    title: string;
    galleryKey: string;  // Zmieniamy 'key' na 'galleryKey'
    obfuscatedFileName: string;
    fileExtension: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, galleryKey, obfuscatedFileName, fileExtension }) => {
    const router = useRouter();
    const imageUrl = obfuscatedFileName
        ? `${process.env.NEXT_PUBLIC_API_URL || ""}/uploads/${obfuscatedFileName}.${fileExtension}`
        : "./dzik.jpg";  // Default image in case there is no miniature

    const handleNavigate = () => {
        router.push(`/gallery/${galleryKey}`);  // Przekierowanie na stronę galerii, używamy 'galleryKey'
    };

    return (
        <Card
            shadow="sm"
            isPressable
            onPress={handleNavigate}  // Przekierowanie po kliknięciu na całą kartę
            className="rounded-lg overflow-hidden"
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
                    <b className="text-lg font-semibold">{title}</b>
                    <div>
                        <button className="text-blue-500 hover:underline mt-2" onClick={handleNavigate}>
                            Przeglądaj galerie
                        </button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default GalleryCard;
