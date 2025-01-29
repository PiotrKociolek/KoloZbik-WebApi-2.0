"use client"

import ZbikNavbar from "@/components/zbikNavbar";
import UserPanel from "@/components/UserPanel";
import ManageUserListsPanel from "@/components/ManageUserListsPanel";
import ManagementGallery from "@/components/ManageGallery";

const Moderator =()=>{
    return(
        <div>
            <ZbikNavbar/>
            <ManageUserListsPanel/>
        </div>

    )
}
export default Moderator