'use client'

import LoginBgImage from "@/components/loginBgImage";
import {Button, Input, Link} from "@nextui-org/react";

const resetPassword = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LoginBgImage />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg text-center">
                    <div className="mx-auto max-w-xs">
                        <Input
                            type="email"
                            label="adres email"
                            description="podaj adres email"
                        />
                        <Button className="mt-4 block">Resetuj Hasło</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default resetPassword