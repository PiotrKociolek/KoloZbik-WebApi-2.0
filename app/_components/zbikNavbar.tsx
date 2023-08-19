'use client'
import {Button, Link, Navbar, Text,Dropdown} from '@nextui-org/react'
import {useState} from "react";
import {useRouter} from "next/navigation";
import NavbarItem from "@nextui-org/react/types/navbar/navbar-item";


const ZbikNavbar = () => {

    const [currentRoute, setCurrentRoute] = useState<string>('');
    const router = useRouter();
    const isRouteActive = (route: string): boolean => {
        return router.pathname === route
    }

    return <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
                Koło Żbik w Nowym Sączu
            </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
            <Navbar.Link isActive={isRouteActive("/dashboard")} href="/dashboard">Strona Główna</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/history")} href="/history">Historia</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/blog")} href="/blog">Aktualności</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/gallery")} href="/gallery">Galeria</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/management")} href="/management">Zarząd</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/contact")} href="/contact">Kontakt</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>


        </Navbar.Content>


        <Navbar.Content>
            <Navbar.Link color="inherit" href="/login">
                Dla Członków
            </Navbar.Link>

        </Navbar.Content>
    </Navbar>
}


export default ZbikNavbar;