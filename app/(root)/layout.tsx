'use client'
import React from "react";
import ZbikNavbar from "@/app/_components/zbikNavbar";
import SSRProvider from 'react-bootstrap/SSRProvider';

const FooLayout = ({children}: { children: React.ReactNode }) => {
    return <>

        <ZbikNavbar/>
        {children}

    </>
}

export default FooLayout;