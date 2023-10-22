'use client'

import {useState} from "react";
import {usePathname} from "next/navigation";
import { useRouter } from 'next/navigation'

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";


const ZbikNavbar = () => {
    const router = useRouter()
    const [currentRoute, setCurrentRoute] = useState<string>("");
    const pathname = usePathname();
    const isRouteActive = (route: string): "none" | "hover" | "always" | "active" | "focus" | undefined => {
        if (pathname === route) {
            return "focus"
        } else return "none";
    };
    const dropdownNavigation =(route:string):any =>{
        router.push(route)
    }
    const buttonColorIfIsActive = (route: string): string => {
       const activePath = isRouteActive(route)
        if (activePath===undefined){
            return "text-red-300"
        } else if (activePath=="focus"){
            return "text-amber-300"
        } else {return "text-gray-300"}
    }

   return (
        <Navbar isBordered isBlurred={false}>
            <NavbarBrand>
                <p className="font-bold text-black">Koło Żbik w Nowym Sączu</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/dashboard")} underline={isRouteActive("/dashboard")} href="/dashboard">
                        Strona Główna
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/gallery")}underline={isRouteActive("/gallery")} href="/gallery">
                        Galeria
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/history")}underline={isRouteActive("/history")} href="/history">
                        Historia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/news")}underline={isRouteActive("/news")} href="/news">
                        Aktualności
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/contact")}underline={isRouteActive("/contact")} href="/contact">
                        Kontakt
                    </Link>
                </NavbarItem>
            </NavbarContent>
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
                    <DropdownItem
                        key="zarząd"
                        onPress={(e) => dropdownNavigation("/management")}
                        >
                        <Link className={buttonColorIfIsActive("/management")}underline={isRouteActive("/management")} href="/management">Zarząd</Link>
                    </DropdownItem>
                    <DropdownItem
                        key="Mapy-Obwodów"
                        onPress={(e) => dropdownNavigation("/maps")}
                      >
                        <Link className={buttonColorIfIsActive("/maps")} underline={isRouteActive("/maps")} href="/maps">Mapy Obwodów</Link>
                    </DropdownItem>
                    <DropdownItem
                        onPress={(e) => dropdownNavigation("/becomeMember")}
                        key="zostań-członkiem">
                        <Link className={buttonColorIfIsActive("/becomeMember")} underline={isRouteActive("/becomeMember")} href="/becomeMember">Zostań Członkiem</Link>
                    </DropdownItem>
                    <DropdownItem
                        key="calendar"
                        onPress={(e) => dropdownNavigation("/calendar")}>
                        <Link className={buttonColorIfIsActive("/calendar")} underline={isRouteActive("/calendar")} href="/calendar">Kalendarz Łowiecki</Link>
                    </DropdownItem>
                    <DropdownItem
                        key="do-pobrania"
                        onPress={(e) => dropdownNavigation("/files")}
                       >
                        <Link className={buttonColorIfIsActive("/files")}underline={isRouteActive("/files")} href="/files">Do Pobrania</Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link className={buttonColorIfIsActive("/login")}underline={isRouteActive("/login")} href="/login">Zaloguj</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    );
};
export default ZbikNavbar