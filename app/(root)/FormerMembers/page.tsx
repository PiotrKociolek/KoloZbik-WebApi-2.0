
"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import FilesTable from "@/components/filesTable";
import Activemembers from "@/components/ActiveMembers";
import FormerMembers from "@/components/FormerMembers";

const files = () => {
    return (
        <div>
            <ZbikNavbar/>
            <div >
                <FormerMembers/>
            </div>
        </div>
    );
};

export default files;