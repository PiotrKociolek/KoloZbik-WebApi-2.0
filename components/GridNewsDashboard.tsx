"use client"

import NewsCard from "@/components/newsCard";

const GridNewsDashboard = () => {
    return (
        <div className="w-full px-4 py-8">
            {/* Grid z 3 kolumnami na większych ekranach i 1 kolumną na mniejszych */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Karty w siatce */}
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
}

export default GridNewsDashboard;
