"use client";

import React, { useEffect, useState } from "react";
import ZbikNavbar from "@/components/zbikNavbar";
import GalleryCard from "@/components/galleryCard";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import GalleryCarousel from "@/components/GalleryCarousel";

interface GalleryData {
    galleryKey: string;  // Zmieniamy 'id' na 'galleryKey'
    title: string;
    obfuscatedFileName: string;
    fileExtension: string;
}

const Gallery = () => {
    const [galleries, setGalleries] = useState<GalleryData[]>([]);  // Dodane typowanie
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getToken = () => localStorage.getItem("jwt") || "";

    const fetchGalleries = async (page: number) => {
        setLoading(true);
        const token = getToken();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const url = token
            ? `${apiUrl}/api/Gallery?pageNumber=${page}&pageSize=1`
            : `${apiUrl}/api/Gallery/guestgalleries?pageNumber=${page}&pageSize=9`;

        try {
            const response = await axios.get(url, {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });

            const galleriesData = response.data.items.map((gallery: any) => ({
                galleryKey: gallery.id,  // Zmieniamy 'id' na 'galleryKey'
                title: gallery.title,
                obfuscatedFileName: gallery.miniatureImage?.obfuscatedFileName || "",
                fileExtension: gallery.miniatureImage?.fileExtension || "",
            }));

            setGalleries(galleriesData);
            setTotalPages(response.data.totalPages || 1);
            setLoading(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unknown error occurred");
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGalleries(currentPage);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="mx-auto p-4 max-w-screen-xl">
            <ZbikNavbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {galleries.map((gallery) => (
                    <GalleryCard
                        key={gallery.galleryKey}
                        title={gallery.title}
                        galleryKey={gallery.galleryKey}  // Zmieniamy 'id' na 'galleryKey'
                        obfuscatedFileName={gallery.obfuscatedFileName}
                        fileExtension={gallery.fileExtension}
                    />
                ))}
            </div>
            <div className="flex justify-center my-4">
                <Pagination
                    variant="light"
                    color="warning"
                    total={totalPages}
                    initialPage={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Gallery;
