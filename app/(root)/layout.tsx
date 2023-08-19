import React from "react";
import ZbikNavbar from "@/app/_components/zbikNavbar";
import ZbikImage from "@/app/_components/zbikImage";
import NewsCard from "@/app/_components/newsCard";
const FooLayout = ({children}: { children: React.ReactNode }) => {
    return <>
        <ZbikNavbar/>
        <NewsCard/>
        {children}
    </>
}

export default FooLayout;