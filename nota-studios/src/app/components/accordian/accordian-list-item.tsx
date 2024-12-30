'use client'; //necessary for React Hooks like "useState"
import Image from "next/image";
import { useState } from "react";

export default function AccordianItem(props){
    const plusIcon = "/plus-svgrepo-com.svg"
    const serviceInfo = 
        <div className="p-4 last:border-b-2">
            <p className="whitespace-pre-line">{props.serviceDesc}</p>
            <br />
            <p className="whitespace-pre-line">{props.servicePrice}</p>
            <br />
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
                            <Image src={plusIcon} alt={plusIcon} width={800} height={800} className="w-full"/>
                        </div>
                    </div>
                </button>
            </h4>
            {isExpanded ? serviceInfo : <></> }  
        </>
    );
}