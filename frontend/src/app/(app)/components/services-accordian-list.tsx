import AccordianItem from "./accordian/accordian-list-item";
import {getStudioServices} from "@/app/_service/app-api-service";

export default async function ServicesList(){
    const services = await getStudioServices();

    return (
        <ul>
            {services.map(service => (
                <AccordianItem 
                    key={service.id}
                    serviceName={service.name}
                    serviceDesc={service.desc}
                    servicePrice={service.price_desc}
                    serviceSubDesc={service.sub_desc}/>
            ))}
        </ul>
    );
}