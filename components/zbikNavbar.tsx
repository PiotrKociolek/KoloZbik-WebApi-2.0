'use client'

import {useState} from "react";
import {usePathname} from "next/navigation";
import ZbikLogo from "@/components/zbikLogo";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";

const ZbikNavbar = () => {

    const [currentRoute, setCurrentRoute] = useState<string>("");
    const pathname = usePathname();
    const isRouteActive = (route: string): boolean => {
        return pathname === route;
    };
    return (
            <Navbar isBordered isBlurred={false}>
                <NavbarBrand>
                    <p className="font-bold text-black">Koło Żbik w Nowym Sączu</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link isActive={isRouteActive("/dashboard")} href="/dashboard">
                            Strona Główna
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link isActive={isRouteActive("/gallery")} href="/gallery">
                            Galeria
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link  isActive={isRouteActive("/history")} href="/history">
                            Historia
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link isActive={isRouteActive("/news")} href="/news">
                            Aktualności
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link isActive={isRouteActive("/contact")} href="/contact">
                            Kontakt
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="md">
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
                        <DropdownItem
                            key="zarząd"
                            className="text-black" color="default">
                            <Link isActive={isRouteActive("/management")} href="/management">Zarząd</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="Mapy Obwodów"
                            className="text-black" color="default">
                            <Link isActive={isRouteActive("/districtMaps")} href="/districtMaps">Do Pobrania</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="zostań-członkiem"
                            className="text-black" color="default">
                            <Link isActive={isRouteActive("/becomeMember")} href="/becomeMember">Zostań Członkiem</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="do-pobrania"
                            className="text-black" color="default">
                            <Link isActive={isRouteActive("/files")} href="/files">Do Pobrania</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link isActive={isRouteActive("/login")} href="/login">Zaloguj</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

    );
};
export default ZbikNavbar