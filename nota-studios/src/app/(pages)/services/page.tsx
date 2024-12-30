import ServicesList from "@/app/components/services-accordian-list";
import SessionButton from "@/app/components/book-session-button";
import { STUDIO_HOURS, STUDIO_EQUIPMENT } from "@/app/constants/constants";

export default function Services(){
    return(
        <>
            <div className="flex md:flex-row sm:flex-col">
                <div className="md:w-1/2 sm:w-full p-6 md:order-2" >
                    <ServicesList />
                    <div className="w-full mt-10 h-4 md:order-3">
                        <SessionButton />
                    </div>
                </div>
                <div className="md:w-1/2 sm:w-full p-6 md:order-first">
                    <h3>Studio Hours</h3>
                    {STUDIO_HOURS.map((schedule, index) =>(
                        <p key={index}>{schedule.day} {schedule.hours}</p>
                    ))};
                    <h3 className="mt-4">Studio Equipment</h3>
                    {STUDIO_EQUIPMENT.map((equipment, index) => (
                        <p key={index}>{equipment}</p>
                    ))};
                </div>
            </div>
        </>
    );
}