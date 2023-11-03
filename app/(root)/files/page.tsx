
"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import FilesTable from "@/components/filesTable";

const files = () => {
    return (
        <div>
            <ZbikNavbar/>
           <div className="mx-auto max-w-xl"><FilesTable/></div>
        </div>
    );
};

export default files;