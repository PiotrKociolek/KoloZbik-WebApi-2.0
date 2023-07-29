import React from "react";
import ZbikNavbar from "@/app/_components/zbikNavbar";

const FooLayout = ({children}: { children: React.ReactNode }) => {
    return <>
        <ZbikNavbar/>
        {children}
    </>
}

export default FooLayout;