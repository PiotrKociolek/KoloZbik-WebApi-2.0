'use client'
import {Navbar, Button, Text, Link} from '@nextui-org/react'
import {useState} from "react";
import {boolean} from "zod";
import {useRouter} from "next/router";



const ZbikNavbar = () =>{

    const [currentRoute, setCurrentRoute] = useState<string>('');
    const router = useRouter();
    const isRouteActive = (route:string):boolean=>{
       return router.pathname === route

    }
    return <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
                ACME
            </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
            <Navbar.Link isActive={isRouteActive("/dashboard")}href="/dashboard">Strona Główna</Navbar.Link>
            <Navbar.Link isActive={ isRouteActive("/blog")} href="/blog">Aktualności</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/gallery")}href="/gallery">Galeria</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/management")}href="/management">Zarząd</Navbar.Link>
            <Navbar.Link isActive={isRouteActive("/contact")}href="/contact">Kontakt</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Button auto flat as={Link} href="#">
                    Sign Up
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    </Navbar>
}


export default  ZbikNavbar;