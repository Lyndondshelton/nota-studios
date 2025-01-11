'use client';
import Image from "next/image";
import { useState } from "react";
import { PLUS_ICON } from "@/app/constants/constants";

export default function AccordianItem(props){
    const SERVICE_INFO = 
        <div className="p-4 last:border-b-2">
            <p className="whitespace-pre-line">{props.serviceDesc}</p>
            <br />
            <p className="whitespace-pre-line font-bold">{props.servicePrice}</p>
            <br />
            { props.serviceSubDesc && (<p className="whitespace-pre-line">{props.serviceSubDesc}</p> )}
        </div>;

    const [isExpanded, setExpanded] = useState(false);

    function toggleExpanded(){
        setExpanded(!isExpanded);
    }

    return(
        <>
            <h4 className="border-t-2 last:border-b-2 p-4">
                <button className="flex items-center w-full justify-between" onClick={toggleExpanded}>
                    <span className="flex-initial">{props.serviceName}</span>
                    <div className="w-6 h-6 flex-initial">
                        <div className="plus">
                            <Image src={PLUS_ICON} alt={PLUS_ICON} width={800} height={800} className="w-full"/>
                        </div>
                    </div>
                </button>
            </h4>
            {isExpanded ? SERVICE_INFO : <></> }  
        </>
    );
}