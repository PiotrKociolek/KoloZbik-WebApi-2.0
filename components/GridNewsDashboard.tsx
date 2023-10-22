"use client"

import NewsCard from "@/components/newsCard";

const GridNewsDashboard = () =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>


    )
}
export default GridNewsDashboard