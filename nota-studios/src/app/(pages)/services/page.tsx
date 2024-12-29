import ServicesList from "@/app/components/services-accordian-list"
import SessionButton from "@/app/components/book-session-button"


export default function Services(){
    const studioHours = [
        {day:"Monday", hours:"4:00PM - 12:00AM"},
        {day:"Tuesday", hours:"4:00PM - 12:00AM"},
        {day:"Wednesday", hours:"4:00PM - 12:00AM"},
        {day:"Thursday", hours:"4:00PM - 12:00AM"},
        {day:"Friday", hours:"4:00PM - 12:00AM"},
        {day:"Saturday", hours:"4:00PM - 12:00AM"},
        {day:"Sunday", hours:"4:00PM - 12:00AM"},
    ]
    const studioEquipment =[
        "FL Studios + Pro Tools + Garage Band",
        'KRK CLASSIC 5" MONITORS',
        "FOCUSRITE CM25 MKIII CONDENSER MICROPHONE",
        "SSL 2+ AUDIO INTERFACE",
        "ALESIS V25 MIDI KEYBOARD"
    ]
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
                {studioHours.map((schedule, index) =>(
                    <p key={index}>{schedule.day} {schedule.hours}</p>
                ))}

                <h3 className="mt-4">Studio Equipment</h3>
                {studioEquipment.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                ))}
            </div>
        </div>
        </>
    )
}