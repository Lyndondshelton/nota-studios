import ServicesList from "@/app/components/services-accordian-list";
import PageH1 from "@/app/components/global/page-h1";
import { STUDIO_HOURS, STUDIO_EQUIPMENT } from "@/app/constants/constants";
import SessionButton from "@/app/components/book-session-button";

export default function Services(){
    return(
        <>
            <PageH1 title="Services"/>
            <div className="flex md:flex-row flex-col">
                <div className="md:w-1/2 sm:w-full px-6 pb-6 md:order-2" >
                    <ServicesList />
                    <div className="w-full pt-[9px] mt-4 text-center hidden md:block">
                        <SessionButton />
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-6 md:order-first text-center md:text-left">
                    <h3>Studio Hours</h3>
                    {STUDIO_HOURS.map((schedule, index) =>(
                        <p key={index}>{schedule.day} {schedule.hours}</p>
                    ))}
                    <h3 className="mt-4">Studio Equipment</h3>
                    {STUDIO_EQUIPMENT.map((equipment, index) => (
                        <p key={index}>{equipment}</p>
                    ))}
                </div>
                <div className="w-full pt-[9px] text-center md:hidden">
                    <SessionButton />
                </div>
            </div>
        </>
    );
}