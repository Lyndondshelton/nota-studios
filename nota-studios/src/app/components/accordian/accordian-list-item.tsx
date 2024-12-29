'use client';
import Image from "next/image";

export default function AccordianItem(props){
    return(
        <>
            <h4 className="border-t-2 last:border-b-2 p-4">
                <button className="flex items-center w-full justify-between">
                    <span className="flex-initial">{props.serviceName}</span>
                    <div className="w-6 h-6 flex-initial">
                        <div className="plus">
                            <Image src="/plus-svgrepo-com.svg" alt="plus-svgrepo-com.svg" width={800} height={800} className="w-full"/>
                        </div>
                    </div>
                </button>
            </h4>
        </>
    );
}