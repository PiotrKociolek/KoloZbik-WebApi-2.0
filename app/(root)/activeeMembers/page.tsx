"use client"

import HuntingCalendar from "@/components/huntingCallendar";
import ZbikNavbar from "@/components/zbikNavbar";
import Activemembers from "@/components/ActiveMembers";

const calendar = () => {
    return (
        <div>
            <ZbikNavbar/>
            <div >
                <Activemembers/>
            </div>

        </div>
    )
}
export default calendar