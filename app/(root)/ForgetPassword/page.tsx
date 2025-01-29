"use client"
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import LoginBgImage from "@/components/loginBgImage";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    const handleResetPassword = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/User/reset-password`, {
                email: email,
            });

            // Sprawdzamy odpowiedź, np. komunikat o sukcesie
            setSuccessMessage("Link do resetowania hasła został wysłany na Twój adres e-mail.");

        } catch (err) {
            // Obsługa błędów
            if (err.response) {
                // Jeśli odpowiedź z serwera jest inna niż 200
                setError(`Błąd: ${err.response.data.message || "Wystąpił błąd podczas próby resetowania hasła."}`);
            } else if (err.request) {
                // Jeśli zapytanie zostało wysłane, ale brak odpowiedzi
                setError("Brak odpowiedzi z serwera.");
            } else {
                // Inny błąd przy konfiguracji zapytania
                setError("Wystąpił błąd podczas resetowania hasła.");
            }
            console.error("Błąd resetowania hasła:", err);
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LoginBgImage />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg text-center">
                    <div className="mx-auto max-w-xs">
                        <Input
                            type="email"
                            label="adres email"
                            description="Podaj swój adres e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                        {successMessage && <div className="text-green-500 text-sm mt-2">{successMessage}</div>}
                        <Button className="mt-4 block" onClick={handleResetPassword}>
                            Resetuj Hasło
                        </Button>
                        <Button className="mt-4 block" onClick={() => router.push('/')}>
                            Powrót na stronę główną
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
