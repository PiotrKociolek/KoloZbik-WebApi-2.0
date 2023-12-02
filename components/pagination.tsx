"use client"
import React from "react";
import {Pagination} from "@nextui-org/react";

const PaginationComponent =()=>{
    return(
        <div>
            <Pagination variant="light" color="warning" total={1} initialPage={1} />
        </div>
    );
}
export default PaginationComponent