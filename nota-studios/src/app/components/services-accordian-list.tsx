import AccordianItem from "./accordian/accordian-list-item";

export default function ServicesList(){
    const services = [
        {
            serviceName: "Recording Sessions",
            serviceDesc: "Visit our studio for professional quality vocal recording and mixing sessions. Our engineers will work with you to help you bring your best in the booth and provide the highest sound quality possible.",
            servicePrice: "$50 per hour"
        },
        {
            serviceName: "Mixing + Mastering",
            serviceDesc: "We offer additional mixing and song mastering outside of session hours.",
            servicePrice: "Mixing - $100 per song\nMastering - $100 per song\nBUNDLE - $150 per song"
        },
        {
            serviceName: "Production",
            serviceDesc: "Tell us what you need, and we’ll make you a beat from scratch. Fully mixed, mastered, and delivered to you directly.\nYou can also browse our Traktrain page for any beats we have for lease or exclusive license.",
            servicePrice: "$50 lease or $100 exclusive"
        },
        {
            serviceName: "Graphic Design",
            serviceDesc: "Whether you need cover art for your upcoming album, a flyer for your next gig, or a new artist logo, we’ve got you covered.",
            servicePrice: "Pricing starts at $50 and varies per project"
        },
        {
            serviceName: "Photography",
            serviceDesc: "We provide photography services for promotional photos, event, behind-the-scenes, album artwork, etc.",
            servicePrice: "$50 per hour\n$300 for events"
        },

    ]
    return (
        <>
            <ul>
                {services.map((service, index) => (
                    <AccordianItem 
                        key={index} 
                        serviceName={service.serviceName} 
                        serviceDesc={service.serviceDesc} 
                        servicePrice={service.servicePrice}/>
                ))}
            </ul>
        </>
    );
}