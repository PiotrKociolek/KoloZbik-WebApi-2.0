import { useState } from "react";
import axios from "axios";
import {
    Accordion,
    AccordionItem,
    Button,
    Input,
    File
} from "@nextui-org/react";

const ManagementGallery = () => {
    // State for gallery data
    const [galleryToAdd, setGalleryToAdd] = useState({
        title: "",
        miniature: null as File | null,
        files: [] as File[],
        memberOnly: false
    });

    // State for gallery removal
    const [galleryIdToRemove, setGalleryIdToRemove] = useState<string>("");

    // Loading, error & success states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Function to handle API requests
    const handleApiRequest = async (url: string, formData: FormData | object, successMessage: string, method: "POST" | "DELETE" = "POST") => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            let response;
            if (method === "POST") {
                response = await axios.post(url, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            } else if (method === "DELETE") {
                response = await axios.delete(url, { params: { id: formData } });
            }

            console.log(successMessage, response?.data);
            setSuccess(successMessage);
        } catch (error) {
            console.error("Error:", error);
            setError("Wystąpił błąd podczas operacji.");
        } finally {
            setLoading(false);
        }
    };

    // Handle adding gallery
    const handleAddGallery = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!galleryToAdd.title || !galleryToAdd.miniature || galleryToAdd.files.length === 0) {
            setError("Tytuł, miniatura oraz pliki są wymagane.");
            return;
        }

        const formData = new FormData();
        formData.append("title", galleryToAdd.title);
        formData.append("miniature", galleryToAdd.miniature);
        galleryToAdd.files.forEach(file => formData.append("files", file));
        formData.append("memberOnly", String(galleryToAdd.memberOnly));

        await handleApiRequest(
            `${process.env.NEXT_PUBLIC_API_URL}/api/Gallery/add`,
            formData,
            "Dodano galerię!"
        );
        setGalleryToAdd({ title: "", miniature: null, files: [], memberOnly: false });
    };

    // Handle removing gallery by ID
    const handleRemoveGallery = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!galleryIdToRemove) {
            setError("ID galerii jest wymagane.");
            return;
        }

        await handleApiRequest(
            `${process.env.NEXT_PUBLIC_API_URL}/api/Gallery/${galleryIdToRemove}`,
            galleryIdToRemove,
            "Usunięto galerię!",
            "DELETE"
        );
        setGalleryIdToRemove("");
    };

    return (
        <div className="mx-auto max-w-3xl p-4">
            <Accordion variant="splitted">
                {/* Dodaj galerię */}
                <AccordionItem key="1" aria-label="Dodaj galerię" title="Dodaj galerię" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleAddGallery}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Tytuł</label>
                            <Input
                                value={galleryToAdd.title}
                                onChange={(e) => setGalleryToAdd({ ...galleryToAdd, title: e.target.value })}
                                placeholder="Podaj tytuł galerii"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Miniatura</label>
                            <File
                                onChange={(e) => setGalleryToAdd({ ...galleryToAdd, miniature: e.target.files[0] })}
                                label="Wybierz miniaturę"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Pliki</label>
                            <File
                                multiple
                                onChange={(e) => setGalleryToAdd({ ...galleryToAdd, files: Array.from(e.target.files || []) })}
                                label="Wybierz pliki"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={galleryToAdd.memberOnly}
                                    onChange={(e) => setGalleryToAdd({ ...galleryToAdd, memberOnly: e.target.checked })}
                                    className="mr-2"
                                />
                                Tylko dla członków
                            </label>
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="primary" className="w-full" disabled={loading}>
                            {loading ? "Dodawanie..." : "Dodaj galerię"}
                        </Button>
                    </form>
                </AccordionItem>

                {/* Usuń galerię */}
                <AccordionItem key="2" aria-label="Usuń galerię" title="Usuń galerię" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleRemoveGallery}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID galerii</label>
                            <Input
                                type="text"
                                value={galleryIdToRemove}
                                onChange={(e) => setGalleryIdToRemove(e.target.value)}
                                placeholder="Podaj ID galerii"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="error" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń galerię"}
                        </Button>
                    </form>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ManagementGallery;
