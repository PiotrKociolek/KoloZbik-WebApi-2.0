"use client"

import ZbikNavbar from "@/components/zbikNavbar";
import BecomeMember from "@/components/BecomeMemberARticle";
import TestYourself from "@/components/TestYourself";

const becomeMember = () => {
    return (

        <div>
            <ZbikNavbar/>
            <div className="mx-auto max-w-xl">
                <BecomeMember/>
                <TestYourself/>
            </div>
        </div>

    );
};

export default becomeMember;