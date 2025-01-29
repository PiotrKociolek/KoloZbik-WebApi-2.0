"use client"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const ManagementCard = () => {
    const members = [
        {
            name: "Piotr Majka",
            role: "Prezes",
            contact: "728 357 444",
            image: "/logokotek.png"
        },
        {
            name: "Hubert Wojnarowski",
            role: "Łowczy",
            contact: "698 493 532",
            image: "/logokotek.png"
        },
        {
            name: "Zygmunt Burnagiel",
            role: "Vice-Łowczy",
            contact: "511 746 332",
            image: "/logokotek.png"
        },
        {
            name: "Artur Kocemba",
            role: "Sekretarz",
            contact: "533 112 174",
            image: "/logokotek.png"
        },
        {
            name: "Bartłomiej Papież",
            role: "Skarbnik",
            contact: "883 347 070",
            image: "/logokotek.png"
        }
    ];

    return (
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {members.map((member, index) => (
                <Card key={index} className="col-span-1 m-4">
                    <CardHeader>
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={member.image}
                            width={270}
                        />
                    </CardHeader>
                    <CardBody>
                        <p>{member.name}</p>
                        <p>Rola: {member.role}</p>
                        <p>Kontakt: {member.contact}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default ManagementCard;
