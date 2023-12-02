"use client"

import {Button, Card, CardBody} from "@nextui-org/react";


const ZbikContact =()=>{
    return (
        <div className="mx-auto p-4 max-w-screen-lg">
            <Card className="p-4">
                <CardBody className="overflow-visible">
                    <p className="text-lg font-semibold mb-2">Adres:</p>
                    <p className="text-gray-600 opacity-0">Ul. Przykładowa 123</p>
                    <p className="text-lg font-semibold mt-4 mb-2">E-mail:</p>
                    <p className="text-gray-600 opacity-0">przykladowy@email.com</p>
                    <p className="text-lg font-semibold mt-4 mb-2">Konto bankowe:</p>
                    <p className="text-gray-600 opacity-0">1234 5678 9012 3456 7890 1234</p>
                    <p className="text-lg font-semibold mt-4 mb-2">Kontakt z Zarządem w sekcji zarząd:</p>

                    <a href="/management">
                        <Button
                        color="primary"
                        variant="ghost"
                    >
                        Przejdź do Zarządu
                    </Button>
                    </a>
                </CardBody>
            </Card>
        </div>



    );
}
export default ZbikContact