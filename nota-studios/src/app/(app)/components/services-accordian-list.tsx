import AccordianItem from "./accordian/accordian-list-item";
import { getPayload } from "payload";
import config from "@/payload.config";

export default async function ServicesList(){
    const payload = await getPayload({config});
    const services = await payload.find({
        collection: 'services'
    });

    const sortedServices = services.docs.sort((a, b) => b.id - a.id);
    
    return (
        <ul>
            {
                sortedServices.map((service) => (
                    <AccordianItem 
                        key={service.id} 
                        serviceName={service.serviceName} 
                        serviceDesc={service.serviceDesc} 
                        servicePrice={service.price}
                        serviceSubDesc={service.subDesc}/>
                ))
            }
        </ul>
    );
}