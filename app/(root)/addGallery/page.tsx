"use client";
import React, { ChangeEvent, useState } from "react";
import DeerBG from "@/components/DeerBG";
import ZbikNavbar from "@/components/zbikNavbar";

const GalleryInput = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<File[]>([]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages = Array.from(files);
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleAddToGallery = () => {
        // Obsługa dodawania do galerii, np. wysyłanie danych do API
        console.log("Dodano do galerii:");
        console.log("Tytuł:", title);
        console.log("Opis:", description);
        console.log("Zdjęcia:", images);
    };

    return (
        <div>
            <ZbikNavbar />
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md relative z-10">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Dodaj do galerii</h2>
                    <label className="block mb-4">
                        <span className="text-white">Tytuł:</span>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Opis:</span>
                        <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Zdjęcia:</span>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                    <button
                        onClick={handleAddToGallery}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Dodaj do galerii
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GalleryInput;
