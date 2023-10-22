"use client"

import {Navbar,Link, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";

const AdminNavbar =()=>{
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
    return(
        <Navbar isBordered isBlurred={false}>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/userMgmt")} underline={isRouteActive("/userMgmt")} href="/userMgmt">
                        Obsługa użytkowników
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/galleryMgmt")}underline={isRouteActive("/galleryMgmt")} href="/galleryMgmt">
                        Obsługa Galerii
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/newsMgmt")}underline={isRouteActive("/newsMgmt")} href="/newsMgmt">
                        Zarządzanie Aktualnosciami
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/mapsMgmt")}underline={isRouteActive("/mapsMgmt")} href="/mapsMgmt">
                        Obsługa Map
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={buttonColorIfIsActive("/calendarMgmt")}underline={isRouteActive("/calendarMgmt")} href="/calendarMgmt">
                        Obsługa Kalendarza
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
};
export default AdminNavbar
