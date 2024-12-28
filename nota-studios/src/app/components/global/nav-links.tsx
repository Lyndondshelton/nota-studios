'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function NavLinks(){
    const pathname = usePathname();

    return(
        <>
            <div className="mx-1">
                <Link href="/" className={clsx({'underline':pathname==='/'})}>HOME</Link>
            </div>
            <div className="mx-1">
                <Link href="/services" className={clsx({'underline':pathname==='/services'})}>SERVICES</Link>
            </div>
            <div className="mx-1">
                <Link href="/meet-the-team" className={clsx({'underline':pathname==='/meet-the-team'})}>MEET THE TEAM</Link>
            </div>
            <div className="mx-1">
                <Link href="/scheduling" className={clsx({'underline':pathname==='/scheduling'})}>SCHEDULING</Link>
            </div>
        </>
    );
}