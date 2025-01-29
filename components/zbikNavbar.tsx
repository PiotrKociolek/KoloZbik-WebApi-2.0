"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

const ZbikNavbar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // State for mobile menu visibility
    const pathname = usePathname();

    // Check if user is logged in by checking for JWT token in localStorage
    useEffect(() => {
        const token = localStorage.getItem('jwtToken'); // Check localStorage for JWT token
        setIsLoggedIn(!!token); // If token exists, set isLoggedIn to true
    }, []); // Empty dependency array ensures this runs once on mount

    const isRouteActive = (route: string): "none" | "hover" | "always" | "active" | "focus" | undefined => {
        return pathname === route ? "focus" : "none";
    };

    const dropdownNavigation = (route: string) => {
        router.push(route);
    };

    const buttonColorIfIsActive = (route: string): string => {
        const activePath = isRouteActive(route);
        if (activePath === undefined) {
            return "text-red-300";
        } else if (activePath === "focus") {
            return "text-amber-300";
        } else {
            return "text-gray-300";
        }
    };

    const handleLogout = () => {
        // Clear the JWT token from localStorage
        localStorage.removeItem('jwtToken');
        setIsLoggedIn(false); // Update state to reflect that user is logged out
        router.push('/dashboard'); // Redirect to login page after logout
    };

    return (
        <Navbar isBordered isBlurred={false} className="bg-black"> {/* Dark background for the Navbar */}
            <NavbarBrand>
                <p className="font-bold text-white">Koło Żbik w Nowym Sączu</p> {/* White text */}
            </NavbarBrand>

            {/* Mobile Menu Toggle Button */}
            <NavbarContent className="sm:hidden flex justify-between items-center w-full">
                <Button
                    className="text-gray-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle mobile menu
                >
                    Menu
                </Button>
            </NavbarContent>

            {/* Navbar Content for larger screens */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/dashboard")} underline={isRouteActive("/dashboard")} href="/dashboard">
                        Strona Główna
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/gallery")} underline={isRouteActive("/gallery")} href="/gallery">
                        Galeria
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/history")} underline={isRouteActive("/history")} href="/history">
                        Historia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/news")} underline={isRouteActive("/news")} href="/news">
                        Aktualności
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/contact")} underline={isRouteActive("/contact")} href="/contact">
                        Kontakt
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Dropdown Menu for extra items */}
            <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-300"
                            radius="md"
                        >
                            Więcej
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    aria-label="more"
                    className="w-[340px]"
                    itemClasses={{
                        base: "gap-4",
                    }}
                >
                    <DropdownItem key="zarząd" onPress={() => dropdownNavigation("/management")}>
                        <Link className={buttonColorIfIsActive("/management")} underline={isRouteActive("/management")} href="/management">Zarząd</Link>
                    </DropdownItem>
                    <DropdownItem key="Mapy-Obwodów" onPress={() => dropdownNavigation("/maps")}>
                        <Link className={buttonColorIfIsActive("/maps")} underline={isRouteActive("/maps")} href="/maps">Mapy Obwodów</Link>
                    </DropdownItem>
                    <DropdownItem onPress={() => dropdownNavigation("/becomeMember")} key="zostań-członkiem">
                        <Link className={buttonColorIfIsActive("/becomeMember")} underline={isRouteActive("/becomeMember")} href="/becomeMember">Zostań Członkiem</Link>
                    </DropdownItem>
                    <DropdownItem key="Członkowie Koła" onPress={() => dropdownNavigation("/activeeMembers")}>
                        <Link className={buttonColorIfIsActive("/activeeMembers")} underline={isRouteActive("/activeeMembers")} href="/activeeMembers">Członkowie Koła</Link>
                    </DropdownItem>
                    <DropdownItem key="do-pobrania" onPress={() => dropdownNavigation("/FormerMembers")}>
                        <Link className={buttonColorIfIsActive("/FormerMembers")} underline={isRouteActive("/FormerMembers")} href="/FormerMembers">Niech im knieja wiecznie szumi</Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Mobile Navbar Menu on the Left (when open) */}
            {mobileMenuOpen && (
                <NavbarContent className="sm:hidden flex flex-col gap-4 w-full bg-gray-900 p-4 absolute left-0 top-0 h-full z-50 overflow-auto">
                    <NavbarItem>
                        <Link className={buttonColorIfIsActive("/dashboard")} underline={isRouteActive("/dashboard")} href="/dashboard">
                            Strona Główna
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={buttonColorIfIsActive("/gallery")} underline={isRouteActive("/gallery")} href="/gallery">
                            Galeria
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={buttonColorIfIsActive("/history")} underline={isRouteActive("/history")} href="/history">
                            Historia
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={buttonColorIfIsActive("/news")} underline={isRouteActive("/news")} href="/news">
                            Aktualności
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={buttonColorIfIsActive("/contact")} underline={isRouteActive("/contact")} href="/contact">
                            Kontakt
                        </Link>
                    </NavbarItem>

                    {/* Login/Logout button inside mobile menu */}
                    <NavbarItem>
                        {isLoggedIn ? (
                            <Button className="text-gray-300" onClick={handleLogout}>Wyloguj</Button>
                        ) : (
                            <Link className={buttonColorIfIsActive("/login")} underline={isRouteActive("/login")} href="/login">Zaloguj</Link>
                        )}
                    </NavbarItem>
                </NavbarContent>
            )}

            {/* Navbar Content for larger screens (Right side - Login/Logout button) */}
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    {/* Conditionally render the button based on login status */}
                    {isLoggedIn ? (
                        <Button className="text-gray-300" onClick={handleLogout}>Wyloguj</Button>
                    ) : (
                        <Link className={buttonColorIfIsActive("/login")} underline={isRouteActive("/login")} href="/login">Zaloguj</Link>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default ZbikNavbar;
