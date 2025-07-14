import AccordianItem from "./accordian/accordian-list-item";
import { SERVICES_LIST } from "../constants/constants";

export default function ServicesList(){
    return (
        <ul>
            {SERVICES_LIST.map((service, index) => (
                <AccordianItem 
                    key={index} 
                    serviceName={service.serviceName} 
                    serviceDesc={service.serviceDesc} 
                    servicePrice={service.servicePrice}
                    serviceSubDesc={service.serviceSubDesc}/>
            ))}
        </ul>
    );
}