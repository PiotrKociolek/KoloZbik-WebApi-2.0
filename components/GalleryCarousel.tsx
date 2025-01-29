"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const GalleryCarousel = ({ galleryId }: { galleryId: string }) => {
    const [images, setImages] = useState<string[]>([]);  // Przechowujemy listę URLi obrazków
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getToken = () => localStorage.getItem("jwt") || "";

    useEffect(() => {
        const fetchGalleryImages = async () => {
            setLoading(true);
            const token = getToken();
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
            const url = `${apiUrl}/api/Gallery/${galleryId}/images`;  // Endpoint, który zwróci obrazy galerii

            try {
                const response = await axios.get(url, {
                    headers: token ? { Authorization: `Bearer ${token}` } : {},
                });
                const imageUrls = response.data.images.map((image: any) =>
                    `${apiUrl}/uploads/${image.obfuscatedFileName}.${image.fileExtension}`
                );
                setImages(imageUrls);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchGalleryImages();
    }, [galleryId]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <Carousel>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`gallery-image-${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GalleryCarousel;
