"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GalleryCarousel from "@/components/GalleryCarousel";

const GalleryDetailPage = () => {
    const router = useRouter();
    const { key } = router.query;  // Zmieniamy 'key' na 'galleryId'

    useEffect(() => {
        if (key) {
            // Pobierz szczegóły galerii na podstawie 'galleryId'
        }
    }, [key]);

    if (!key) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gallery-detail">
            <GalleryCarousel galleryId={key as string} />  {/* Przekazanie 'galleryId' do Carousel */}
        </div>
    );
};

export default GalleryDetailPage;
