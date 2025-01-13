
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import HeaderLogo from "./header-logo";
import NavLinks from "./nav-links";
import { CROSS_ICON, MENU_ICON } from "../../constants/constants";
import { usePathname } from "next/navigation";

export default function Header(){
    const SVG_WIDTH_HEIGHT = 800;
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const pathname = usePathname();

    function toggleMenu() {
        setIsMenuExpanded(!isMenuExpanded);
    }

    // Close the menu on route change
    useEffect(() => {
        setIsMenuExpanded(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuExpanded ? "hidden" : "";
    },[isMenuExpanded]);
    
    return(
        <div className="w-full h-header relative z-50">
            <div className="absolute z-10">
                <HeaderLogo />
            </div>
            <div id="desktopNav" className="hidden md:flex flex-row justify-center items-center h-nav">
                <NavLinks />
            </div>
            { isMenuExpanded && 
                <div id="mobileNav" className="fixed inset-0 bg-white text-black flex flex-col items-center overflow-y-auto py-[25vh]">
                    <NavLinks />
                </div>
            }
            <div className="absolute right-3 w-12 mt-10 z-10 md:hidden">
                <button onClick={toggleMenu}>
                    { !isMenuExpanded && <Image src={MENU_ICON} alt={MENU_ICON} width={SVG_WIDTH_HEIGHT} height={SVG_WIDTH_HEIGHT} unoptimized/> }
                    { isMenuExpanded && <Image src={CROSS_ICON} alt={CROSS_ICON} width={SVG_WIDTH_HEIGHT} height={SVG_WIDTH_HEIGHT} unoptimized/> }
                </button>
            </div>
        </div>
    );
}
