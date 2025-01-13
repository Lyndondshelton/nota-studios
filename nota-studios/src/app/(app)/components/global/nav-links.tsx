'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { NAV_LINKS } from "../../constants/constants";

export default function NavLinks(){
    const pathname = usePathname();

    return(
        <>
            {
                NAV_LINKS.map((link, index) => (
                    <div key={index}>
                        <div className="mx-1">
                            <Link href={link.path} className={clsx( {'underline':pathname===link.path} )}>{link.name}</Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
}