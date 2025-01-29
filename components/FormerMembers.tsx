"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import ZbikNavbar from "@/components/zbikNavbar";
import ZbikBgImage from "@/components/zbikBgImage";
import LoginBgImage from "@/components/loginBgImage";
import { Card, CardBody, Image } from "@nextui-org/react";

const FormerMembers = () => {
    // State to store the members data
    const [members, setMembers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Fetch former members data from API
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/UserLists/Get-Rip`);
                setMembers(response.data);
            } catch (err) {
                setError("Wystąpił błąd podczas ładowania danych.");
                console.error("Error fetching former members:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading) {
        return (
            <div className="relative">
                <LoginBgImage />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Card shadow="sm" className="rounded-lg overflow-hidden bg-gray-900 opacity-75 w-11/12 sm:w-3/4 md:w-1/2">
                        <CardBody className="p-4 text-center text-white">
                            <p>Ładowanie...</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative">
                <LoginBgImage />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Card shadow="sm" className="rounded-lg overflow-hidden bg-gray-900 opacity-75 w-11/12 sm:w-3/4 md:w-1/2">
                        <CardBody className="p-4 text-center text-white">
                            <p>{error}</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <LoginBgImage />
            <div className="absolute inset-0 flex items-center justify-center">
                <Card shadow="sm" className="rounded-lg overflow-hidden bg-gray-900 opacity-75 w-11/12 sm:w-3/4 md:w-1/2">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl text-white shadow-lg p-2 bg-opacity-75 bg-gray-900 rounded-lg">
                            Niech im knieja wiecznie szumi..
                        </h1>
                    </div>
                    <CardBody className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Map through the fetched members and display their names */}
                            {members.map((member) => (
                                <div key={member.id} className="bg-gray-900 p-4 rounded-lg text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        <Image
                                            src="/grey_hat.png"  // Use the grey hat image
                                            alt="Grey Hat Image"
                                            width={50}  // Set width of the image
                                            height={50}  // Set height of the image
                                            className="rounded-full"  // Make the image round
                                        />
                                        <b className="text-lg font-semibold text-white">
                                            {member.name} {member.surname}
                                        </b>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default FormerMembers;
