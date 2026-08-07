'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Layout(){
    const pathname = usePathname();
    const upcomingLink = "/events/upcoming";
    const pastLink = "/events/past";

    return(
        <>
            <ul className="flex flex-row gap-8 justify-center text-xl">
                <li>
                    <Link href={upcomingLink}
                          className={clsx(
                              {'underline':pathname===upcomingLink}
                          )}>
                        Upcoming
                    </Link>
                </li>
                <li>
                    <Link href={pastLink}
                          className={clsx(
                              {'underline':pathname===pastLink}
                          )}>
                        Past
                    </Link>
                </li>
            </ul>
        </>
    )
}