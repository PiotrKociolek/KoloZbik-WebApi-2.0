"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import GalleryCard from "@/components/galleryCard";
import PaginationComponent from "@/components/pagination";
import {Button, Link} from "@nextui-org/react";

const gallery = () => {
    return(
        <div className="mx-auto p-4 max-w-screen-xl">
            <ZbikNavbar />

            <Button href="/addGallery"as={Link}> Dodaj</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
            <div className="flex justify-center my-4">
                <PaginationComponent />
            </div>
        </div>


    );
};


export default gallery;