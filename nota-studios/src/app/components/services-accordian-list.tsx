import AccordianItem from "./accordian/accordian-list-item";

export default function ServicesList(){
    return (
        <>
        
            <ul>
                <AccordianItem serviceName="Recording Sessions"/>
                <AccordianItem serviceName="Mixing + Mastering"/>
                <AccordianItem serviceName="Production"/>
                <AccordianItem serviceName="Graphic Design"/>
                <AccordianItem serviceName="Photography"/>
            </ul>
        </>
    );
}