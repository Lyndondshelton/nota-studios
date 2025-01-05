'use client';
import NavLinks from "./nav-links";
import Image from "next/image";
import { CROSS_ICON, MENU_ICON } from "@/app/(app)/constants/constants";
import { useState } from "react";

export default function NavDropdown(){
    let dropdownIcon = MENU_ICON;
    const [dropdownState, setDropdownState] = useState(false);

    function toggleDropdown(){
        setDropdownState(!dropdownState);
        console.log('Dropdown state set ',dropdownState)
        if(!dropdownState){
            console.log("Dropdown state false")
            dropdownIcon = MENU_ICON;
        }else if(dropdownState){
            console.log("Dropdown state is true")
            dropdownIcon = CROSS_ICON;
        }
    }

    return(
        <div id="headerNav" className="w-full z-10 h-screen fixed bg-white">
            <div className="text-center pt-nav-dropdown md:mt-14 md:inline-flex flex-wrap md:justify-center">
                <NavLinks />
            </div>
            <button className="w-12 h-12 mt-10 absolute right-4 top-0" onClick={toggleDropdown}>
                <Image src={dropdownIcon} alt={dropdownIcon} width="800" height="800" unoptimized/>
            </button>
        </div>
    );
}