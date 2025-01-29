"use client"

import ZbikNavbar from "@/components/zbikNavbar";
import { Card, CardBody } from "@nextui-org/react";
import Footer from "@/components/footer";
import React from "react";

const ErrorPage = () => {

    return (
        <div>
            <ZbikNavbar />
            <div className="flex justify-center items-center min-h-screen bg-red-300">
                <Card className="bg-red-600 shadow-md rounded-lg p-6">
                    <CardBody className="flex justify-center items-center text-center">
                        <p className="text-white mb-4 mx-4 leading-6">
                            Nie masz uprawnień do tej strony, lub nie jesteś zalogowany.
                            Jeśli problem będzie się powtarzał, skontaktuj się z administracją.
                        </p>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default ErrorPage;
