"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import GalleryCard from "@/components/galleryCard";
import PaginationComponent from "@/components/pagination";
import {Button, Link} from "@nextui-org/react";
import Gallery1 from "@/components/gal1";
import Gallery2 from "@/components/gal2";
import Gallery3 from "@/components/gal3";
import Gallery4 from "@/components/gal4";

const gallery = () => {
    return(
        <div className="mx-auto p-4 max-w-screen-xl">
            <ZbikNavbar />

            <Button href="/addGallery"as={Link} className="opacity-0"> Dodaj</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <Gallery1 />
                <Gallery2/>
                <Gallery3/>
                <Gallery4/>

            </div>
            <div className="flex justify-center my-4">
                <PaginationComponent />
            </div>
        </div>


    );
};


export default gallery;