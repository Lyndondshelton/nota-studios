import ServicesList from "@/app/(app)/components/services-accordian-list";
import PageH1 from "@/app/(app)/components/global/page-h1";
import SessionButton from "@/app/(app)/components/book-session-button";
import {getServiceSchedule, getStudioEquipmentList} from "@/app/_service/app-api-service";
import {formatTime} from "@/app/_util/formatter";


export default async function Services(){
    const studioEquipment = await getStudioEquipmentList();
    const studioHours = await getServiceSchedule();

    console.log("Fetched studio hours schedule: ", studioHours)
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
                    {studioHours.map((schedule) =>(
                        <p key={schedule.day_of_week}>{schedule.day_name} { formatTime(schedule.start_time) } - { formatTime(schedule.end_time) }</p>
                    ))}
                    <h3 className="mt-4">Studio Equipment</h3>
                    {studioEquipment.map((equipment) => (
                        <p key={equipment.id}>{equipment.description}</p>
                    ))}
                </div>
                <div className="w-full pt-[9px] text-center md:hidden">
                    <SessionButton />
                </div>
            </div>
        </>
    );
}