"use client"

import { Divider } from "@nextui-org/react";

const Footer = () => {
    return (
        <div>
            <Divider orientation="horizontal" />
            <div className="flex justify-center items-center py-4">
                <p>©2025 Koło Łowieckie Żbik</p>
            </div>
        </div>
    );
};

export default Footer;
