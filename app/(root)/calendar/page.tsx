"use client"

import HuntingCalendar from "@/components/huntingCallendar";
import ZbikNavbar from "@/components/zbikNavbar";

const calendar = () => {
    return (
        <div>
            <ZbikNavbar/>
            <div className="place-content-center" >
                <HuntingCalendar/>
            </div>

        </div>
    )
}
export default calendar