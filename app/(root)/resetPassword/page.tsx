'use client'

import LoginBgImage from "@/components/loginBgImage";
import {Button, Input, Link} from "@nextui-org/react";

const resetPassword = () => {
    return (
        <div>
        <LoginBgImage/>
            <Input
                type="email"
                label="adres email"
                description="podaj adres email"
                className="max-w-xs"
            />
            <Button>Resetuj Hasło</Button>
        </div>
    );
};
export default resetPassword