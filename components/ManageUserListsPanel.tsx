import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Accordion,
    AccordionItem,
    Button,
    Input
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
interface Post {
    title: string;
    content: string;
    miniature: File | null;
    files: File[];
    memberOnly: boolean;
}
interface Gallery {
    title: string;
    miniature: File | null; // File or null for the image
    files: File[]; // Array of files
    memberOnly: boolean; // Boolean indicating if the gallery is for members only
}

const ManageUserListsPanel = () => {
    const router = useRouter();

    // State for user and RIP data
    const [userToAdd, setUserToAdd] = useState({ name: "", lastName: "" });
    const [ripToAdd, setRipToAdd] = useState({ name: "", lastName: "" });
    const [postToAdd, setPostToAdd] = useState<Post>({
        title: "",
        content: "",
        miniature: null,
        files: [],
        memberOnly: false,
    });
    const [galleryToAdd, setGalleryToAdd] = useState<Gallery>({
        title: "",
        miniature: null,
        files: [],
        memberOnly: false,
    });

    // State for ID removal
    const [userIdToRemove, setUserIdToRemove] = useState<number | string>(""); // For removing user by ID
    const [ripIdToRemove, setRipIdToRemove] = useState<number | string>(""); // For removing RIP by ID
    const [postIdToRemove, setPostIdToRemove] = useState<string>("");
    const [galleryIdToRemove, setGalleryIdToRemove]  = useState<string>("");

    // Loading, error & success states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const checkJwt = () => {
        const token = localStorage.getItem("jwt");  // Jeśli JWT jest w localStorage
        // Możesz również sprawdzić token w cookies, w zależności od tego, jak masz go przechowywanego
        if (!token) {
            router.push("/Error");  // Przekierowanie na stronę /Error
        }
    };

    useEffect(() => {
        // Sprawdzamy JWT przy pierwszym renderowaniu
        checkJwt();
    }, []);
    // Function to handle API requests
    const handleApiRequestForInt = async (url: string, params: object, successMessage: string, method: "POST" | "DELETE" = "POST") => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            let response;
            if (method === "POST") {
                response = await axios.post(url, null, { params, headers: { "Content-Type": "application/json" } });
            } else if (method === "DELETE") {
                response = await axios.delete(url, { params });
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
    const handleApiRequestForGuid = async (url: string, id: string, successMessage: string, method: "POST" | "DELETE" = "POST") => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            let response;

            // Obsługuje metodę POST
            if (method === "POST") {
                response = await axios.post(url, null, {
                    params: { id }, // W przypadku POST przekazujemy parametry
                    headers: { "Content-Type": "application/json" },
                });
            }
            // Obsługuje metodę DELETE (w przypadku GUID zwykle przekazujemy go w ścieżce URL)
            else if (method === "DELETE") {
                // Zaktualizuj URL, aby uwzględniał GUID
                const deleteUrl = `${url}/${id}`; // Dołączamy GUID bezpośrednio do ścieżki
                response = await axios.delete(deleteUrl, { headers: { "Content-Type": "application/json" } });
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



    // Handle adding user to the member list
    const handleAddUserToList = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userToAdd.name || !userToAdd.lastName) {
            setError("Oba pola są wymagane.");
            return;
        }

        await handleApiRequestForInt(
            `${process.env.NEXT_PUBLIC_API_URL}/api/UserLists/AddUserToList`,
            { name: userToAdd.name, surname: userToAdd.lastName },
            "Dodano użytkownika do listy członków!"
        );
        setUserToAdd({ name: "", lastName: "" });
    };

    // Handle adding RIP
    const handleAddRip = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ripToAdd.name || !ripToAdd.lastName) {
            setError("Oba pola są wymagane.");
            return;
        }

        await handleApiRequestForInt(
            `${process.env.NEXT_PUBLIC_API_URL}/api/UserLists/Add-Rip`,
            { name: ripToAdd.name, surname: ripToAdd.lastName },
            "Dodano wpis do sekcji 'Niech im knieja wiecznie szumi'!"
        );
        setRipToAdd({ name: "", lastName: "" });
    };

    // Handle removing user from the member list by ID
    const handleRemoveUserFromList = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userIdToRemove) {
            setError("ID użytkownika jest wymagane.");
            return;
        }

        await handleApiRequestForInt(
            `${process.env.NEXT_PUBLIC_API_URL}/api/UserLists/Delete-USer-From-List`,
            { id: userIdToRemove },
            "Usunięto użytkownika z listy członków!",
            "DELETE"
        );
        setUserIdToRemove("");
    };

    // Handle removing RIP by ID
    const handleRemoveRip = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ripIdToRemove) {
            setError("ID jest wymagane.");
            return;
        }

        await handleApiRequestForInt(
            `${process.env.NEXT_PUBLIC_API_URL}/api/UserLists/Delete-Rip`,
            {id: ripIdToRemove},
            "Usunięto wpis z sekcji 'Niech im knieja wiecznie szumi'!",
            "DELETE"
        );
        setRipIdToRemove("");
    };
    const handleAddPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const formData = new FormData();
            formData.append("title", postToAdd.title);
            formData.append("content", postToAdd.content);
            if (postToAdd.miniature) {
                formData.append("miniature", postToAdd.miniature);
            }
            postToAdd.files.forEach((file) => formData.append("files", file));
            formData.append("memberOnly", String(postToAdd.memberOnly));

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Post/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Dodano post:", response.data);
            setSuccess("Post dodany pomyślnie!");
            setPostToAdd({ title: "", content: "", miniature: null, files: [], memberOnly: false });
        } catch (error) {
            console.error("Błąd dodawania posta:", error);
            setError("Wystąpił błąd podczas dodawania posta.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddGallery = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const formData = new FormData();
            formData.append("title", galleryToAdd.title);
            if (galleryToAdd.miniature) {
                formData.append("miniature", galleryToAdd.miniature);
            }
            galleryToAdd.files.forEach((file) => formData.append("files", file));
            formData.append("memberOnly", String(galleryToAdd.memberOnly));

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Gallery/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Dodano galerię:", response.data);
            setSuccess("Galeria dodana pomyślnie!");
            setGalleryToAdd({ title: "", miniature: null, files: [], memberOnly: false });
        } catch (error) {
            console.error("Błąd dodawania galerii:", error);
            setError("Wystąpił błąd podczas dodawania galerii.");
        } finally {
            setLoading(false);
        }
    };


    const handleRemoveGallery = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!galleryIdToRemove) {
            setError("ID jest wymagane.");
            return;
        }
        await handleApiRequestForGuid(
            `${process.env.NEXT_PUBLIC_API_URL}/api/Gallery`,
            galleryIdToRemove,  // <-- Użyj poprawnej zmiennej
            "Usunięto Galerię",
            "DELETE"
        );
    };

    const handleRemovePost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!postIdToRemove) {
            setError("ID jest wymagane.");
            return;
        }
        await handleApiRequestForGuid(
            `${process.env.NEXT_PUBLIC_API_URL}/api/Post`,
            postIdToRemove,  // <-- Użyj poprawnej zmiennej
            "Usunięto post",
            "DELETE"
        );
    };

    return (
        <div className="mx-auto max-w-3xl p-4">
            <Accordion variant="splitted">
                {/* Dodaj do listy członków koła */}
                <AccordionItem key="5" aria-label="Dodaj do listy członków koła" title="Dodaj do listy członków koła" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleAddUserToList}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Imię</label>
                            <Input
                                value={userToAdd.name}
                                onChange={(e) => setUserToAdd({ ...userToAdd, name: e.target.value })}
                                placeholder="Podaj Imię"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Nazwisko</label>
                            <Input
                                value={userToAdd.lastName}
                                onChange={(e) => setUserToAdd({ ...userToAdd, lastName: e.target.value })}
                                placeholder="Podaj Nazwisko"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="primary" className="w-full" disabled={loading}>
                            {loading ? "Dodawanie..." : "Dodaj do listy członków"}
                        </Button>
                    </form>
                </AccordionItem>

                {/* Dodaj do sekcji Niech im knieja wiecznie szumi */}
                <AccordionItem key="6" aria-label="Dodaj do sekcji Niech im knieja wiecznie szumi" title="Dodaj do sekcji Niech im knieja wiecznie szumi" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleAddRip}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Imię</label>
                            <Input
                                value={ripToAdd.name}
                                onChange={(e) => setRipToAdd({ ...ripToAdd, name: e.target.value })}
                                placeholder="Podaj Imię"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Nazwisko</label>
                            <Input
                                value={ripToAdd.lastName}
                                onChange={(e) => setRipToAdd({ ...ripToAdd, lastName: e.target.value })}
                                placeholder="Podaj Nazwisko"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="primary" className="w-full" disabled={loading}>
                            {loading ? "Dodawanie..." : "Dodaj do sekcji 'Niech im knieja wiecznie szumi'"}
                        </Button>
                    </form>
                </AccordionItem>

                {/* Usuń z listy członków koła */}
                <AccordionItem key="7" aria-label="Usuń z listy członków koła" title="Usuń z listy członków koła" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleRemoveUserFromList}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID użytkownika</label>
                            <Input
                                type="number"
                                value={userIdToRemove}
                                onChange={(e) => setUserIdToRemove(e.target.value)}
                                placeholder="Podaj ID użytkownika"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="error" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń z listy członków"}
                        </Button>
                    </form>
                </AccordionItem>

                {/* Usuń z sekcji Niech im knieja wiecznie szumi */}
                <AccordionItem key="8" aria-label="Usuń z sekcji Niech im knieja wiecznie szumi" title="Usuń z sekcji Niech im knieja wiecznie szumi" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleRemoveRip}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID RIPa</label>
                            <Input
                                type="number"
                                value={ripIdToRemove}
                                onChange={(e) => setRipIdToRemove(e.target.value)}
                                placeholder="Podaj ID"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="danger" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń z sekcji 'Niech im knieja wiecznie szumi'"}
                        </Button>
                    </form>
                </AccordionItem>
                    {/* Usuń Post*/}
                <AccordionItem key="9" aria-label="Usuń Post" title="Usuń Post" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleRemovePost}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID Post-u</label>
                            <Input
                                type="string"
                                value={postIdToRemove}
                                onChange={(e) => setPostIdToRemove(e.target.value)}
                                placeholder="Podaj ID"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="danger" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń Post'"}
                        </Button>
                    </form>
            </AccordionItem>
                <AccordionItem key="10" aria-label="Usuń galerię" title="Usuń Galerię" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleRemoveGallery}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID Galerii</label>
                            <Input
                                type="number"
                                value={galleryIdToRemove}
                                onChange={(e) => setGalleryIdToRemove(e.target.value)}
                                placeholder="Podaj ID"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="danger" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń galerię"}
                        </Button>
                    </form>
                </AccordionItem>
                <AccordionItem key="11" aria-label="Dodaj Galerię" title="Dodaj Galerię" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleAddGallery} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Tytuł galerii"
                            value={galleryToAdd.title}
                            onChange={(e) => setGalleryToAdd({ ...galleryToAdd, title: e.target.value })}
                        />
                        <Input
                            type="file"
                            onChange={(e) => setGalleryToAdd({ ...galleryToAdd, miniature: e.target.files[0] })}
                        />
                        <Input
                            type="file"
                            multiple
                            onChange={(e) => setGalleryToAdd({ ...galleryToAdd, files: Array.from(e.target.files) })}
                        />
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={galleryToAdd.memberOnly}
                                onChange={(e) => setGalleryToAdd({ ...galleryToAdd, memberOnly: e.target.checked })}
                            />
                            <span>Tylko dla członków</span>
                        </label>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Dodawanie..." : "Dodaj Galerię"}
                        </Button>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                    </form>
                </AccordionItem>
                <AccordionItem key="12" aria-label="Dodaj Post" title="Dodaj Post" className="bg-white shadow-lg rounded-lg p-4">
                    <form onSubmit={handleAddPost} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Tytuł posta"
                            value={postToAdd.title}
                            onChange={(e) => setPostToAdd({ ...postToAdd, title: e.target.value })}
                        />
                        <Input
                            type="text"
                            placeholder="Treść posta"
                            value={postToAdd.content}
                            onChange={(e) => setPostToAdd({ ...postToAdd, content: e.target.value })}
                        />
                        <Input
                            type="file"
                            onChange={(e) => setPostToAdd({ ...postToAdd, miniature: e.target.files[0] })}
                        />
                        <Input
                            type="file"
                            multiple
                            onChange={(e) => setPostToAdd({ ...postToAdd, files: Array.from(e.target.files) })}
                        />
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={postToAdd.memberOnly}
                                onChange={(e) => setPostToAdd({ ...postToAdd, memberOnly: e.target.checked })}
                            />
                            <span>Tylko dla członków</span>
                        </label>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Dodawanie..." : "Dodaj Post"}
                        </Button>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                    </form>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ManageUserListsPanel;
