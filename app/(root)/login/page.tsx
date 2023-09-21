"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import LoginBgImage from "@/components/loginBgImage";
import {Button, Input, Link} from "@nextui-org/react";
import {useState} from "react";
import {usePathname} from "next/navigation";
import resetPassword from "@/app/(root)/resetPassword/page";
const login = () => {
    const [currentRoute, setCurrentRoute] = useState<string>("");
    const pathname = usePathname();
    const isRouteActive = (route: string): boolean => {
        return pathname === route;
    };
    return (
        <div >
        <LoginBgImage/>
            <Input
                type="username"
                label="nazwa użytkownika"
                description="podaj swoją nazwe użytkownika"
                className="max-w-xs"
            />
            <Input
                type="password"
                label="haslo"
                description="podaj swoje hasło"
                className="max-w-xs"
            />
            <Button> <Link isActive={isRouteActive("/resetPassword")} href="/resetPassword">Nie pamiętam hasła</Link></Button>
        </div>
    );
};

export default login;