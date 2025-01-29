"use client"
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"; // Import useRouter

const historyShort = () => {
    const router = useRouter(); // Tworzymy instancję useRouter

    const handleClick = () => {
        router.push("/history"); // Używamy router.push do przekierowania
    };

    return (
        <Card className="bg-gray-800 shadow-md rounded-lg p-4 m-4">
            <div className="flex flex-col items-center">
                <Image src={"/zalozyciele.svg"} />
                <CardBody className="mx-4">
                    <p className="text-gray-100 mb-2 ml-4 mr-4 leading-6">
                        Gdy milkną wystrzały przesuwającego się na zachód frontu, sądeccy
                        myśliwi zaczynają się grupować z myślą o możliwości wydzierżawienia
                        obwodów łowieckich. Ci którzy zdobyli lub udało się im zarejestrować
                        broń przechowywaną w okresie okupacji czynią starania o jej
                        zarejestrowanie i w Starostwie szukają dróg umożliwiających dzierżawę
                        wybranych wiosek i niektórym się to udaje. Z końcem roku 1947 powstaje
                        na terenie Nowego Sącza pierwsze Koło Łowieckie, które przybiera nazwę
                        „Dunajec”. Jego pierwszymi członkami zostają późniejsi założyciele
                        Koła „Żbik”: Władysław Pajorski, Bolesław Serkowski, Stefan Majcher,
                        Jan Łoboda...
                    </p>
                    <div className="mt-2 text-center">
                        <Button color="success" onClick={handleClick} className="text-white">
                            Czytaj Więcej
                        </Button>
                    </div>
                </CardBody>
            </div>
        </Card>
    );
}

export default historyShort;
