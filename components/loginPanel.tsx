"use client"
import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import LoginBgImage from "@/components/loginBgImage";
import { useRouter } from 'next/navigation';

const LoginPanel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    // Sprawdzanie, czy użytkownik jest już zalogowany (tylko w przeglądarce)
    useEffect(() => {
        if (typeof window !== "undefined") { // Tylko po stronie klienta
            const token = localStorage.getItem('jwtToken');
            if (token) {
                // Jeśli token istnieje, przekieruj na dashboard
                router.push('/dashboard');
            }
        }
    }, [router]);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/User/login`, {
                email: email,
                password,
            });

            // Załóżmy, że token znajduje się w odpowiedzi
            const token = response.data.token;

            // Zapisz token JWT w localStorage
            localStorage.setItem('jwtToken', token);
            // Przekierowanie na dashboard po udanym logowaniu
            router.push('/dashboard');
        } catch (err) {
            // Obsługa błędów
            if (err.response) {
                // Jeśli odpowiedź z serwera jest inna niż 200
                setError(`Błąd: ${err.response.data.message || "Nieprawidłowa nazwa użytkownika lub hasło."}`);
            } else if (err.request) {
                // Jeśli zapytanie zostało wysłane, ale brak odpowiedzi
                setError("Brak odpowiedzi z serwera.");
            } else {
                // Inny błąd przy konfiguracji zapytania
                setError("Wystąpił błąd podczas logowania.");
            }
            console.error("Błąd logowania:", err);
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LoginBgImage />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg text-center">
                    <div className="mx-auto max-w-xs">
                        <Input
                            type="text"
                            label="email"
                            description="Podaj swoją nazwę użytkownika"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            label="hasło"
                            description="Podaj swoje hasło"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                        <Button className="mt-4 block" onClick={handleLogin}>
                            Zaloguj
                        </Button>
                        <a href="/ForgetPassword">
                            <Button className="mt-2 block">Zresetuj Hasło</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPanel;
