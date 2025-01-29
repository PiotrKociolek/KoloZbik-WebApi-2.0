"use client";

import {
    Accordion,
    AccordionItem,
    Button,
    Input,
    Tab,
    Tabs,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export enum Roles {
    User = 0,
    Moderator = 1,
    Admin = 2,
}

interface User {
    name: string;
    lastName: string;
    email: string;
    id: string;
}

interface RegisterDto {
    Email: string;
    Password: string;
    Roles: Roles;
    FirstName: string;
    LastName: string;
}

const UserPanel = () => {
    const [userToRegister, setUserToRegister] = useState<RegisterDto>({
        Email: "",
        Password: "",
        Roles: Roles.User,
        FirstName: "",
        LastName: "",
    });

    const [users, setUsers] = useState<User[]>([]);
    const [emailToUpdate, setEmailToUpdate] = useState<string>("");
    const [userToRemove, setUserToRemove] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/User/user-list`);
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleRegister = async () => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/User/register`, userToRegister);
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const handleRoleChange = async (role: Roles) => {
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/User`, null, {
                params: { email: emailToUpdate, role },
            });
            fetchUsers();
        } catch (error) {
            console.error(`Error updating role to ${role}:`, error);
        }
    };

    const handleRemoveUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/User/${userToRemove}`);
            setSuccess("Użytkownik został usunięty.");
            setUserToRemove("");
            fetchUsers();
        } catch (error) {
            setError("Błąd podczas usuwania użytkownika.");
            console.error("Error deleting user:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-xl">
            <Accordion variant="splitted">
                <AccordionItem key="1" title="Dodaj Użytkownika">
                    <Input name="FirstName" value={userToRegister.FirstName} onChange={(e) => setUserToRegister({ ...userToRegister, FirstName: e.target.value })} placeholder="Podaj Imię" />
                    <Input name="LastName" value={userToRegister.LastName} onChange={(e) => setUserToRegister({ ...userToRegister, LastName: e.target.value })} placeholder="Podaj Nazwisko" />
                    <Input name="Email" value={userToRegister.Email} onChange={(e) => setUserToRegister({ ...userToRegister, Email: e.target.value })} placeholder="Podaj Mail" />
                    <Input name="Password" type="password" value={userToRegister.Password} onChange={(e) => setUserToRegister({ ...userToRegister, Password: e.target.value })} placeholder="Podaj Hasło" />
                    <Button onClick={handleRegister}>Zatwierdź</Button>
                </AccordionItem>

                <AccordionItem key="2" title="Zmień rolę na Moderator">
                    <Input placeholder="Podaj Email Użytkownika" value={emailToUpdate} onChange={(e) => setEmailToUpdate(e.target.value)} />
                    <Button onClick={() => handleRoleChange(Roles.Moderator)}>Zmień na Moderator</Button>
                </AccordionItem>

                <AccordionItem key="3" title="Zmień rolę na Admin">
                    <Input placeholder="Podaj Email Użytkownika" value={emailToUpdate} onChange={(e) => setEmailToUpdate(e.target.value)} />
                    <Button onClick={() => handleRoleChange(Roles.Admin)}>Zmień na Admin</Button>
                </AccordionItem>

                <AccordionItem key="4" title="Zmień rolę na Użytkownik">
                    <Input placeholder="Podaj Email Użytkownika" value={emailToUpdate} onChange={(e) => setEmailToUpdate(e.target.value)} />
                    <Button onClick={() => handleRoleChange(Roles.User)}>Zmień na Użytkownika</Button>
                </AccordionItem>

                <AccordionItem key="5" title="Lista Użytkowników">
                    <Table>
                        <TableHeader>
                            <TableColumn>Imię</TableColumn>
                            <TableColumn>Nazwisko</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>ID</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.id}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionItem>

                <AccordionItem key="6" title="Usuń Użytkownika">
                    <form onSubmit={handleRemoveUser}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">ID Użytkownika</label>
                            <Input
                                type="text"
                                value={userToRemove}
                                onChange={(e) => setUserToRemove(e.target.value)}
                                placeholder="Podaj ID"
                                className="w-full"
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
                        <Button type="submit" color="danger" className="w-full" disabled={loading}>
                            {loading ? "Usuwanie..." : "Usuń użytkownika"}
                        </Button>
                    </form>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default UserPanel;
