'use client';
import { InlineWidget } from "react-calendly"

export default function Scheduling(){
    return(
        <>
            <div className="w-full my-8 text-center">
                <h1 className="uppercase mb-8">Scheduling</h1>
            </div>

            <InlineWidget 
                    url="https://calendly.com/notastudiosapp/notastudios"
                    pageSettings={{
                        backgroundColor: '1a1a1a',
                        primaryColor: 'FF5E57',
                        textColor: 'ffffff'
                    }}
                    styles={{
                        height: '70vh',
                        minHeight: '70vh'
                    }}
                />

        </>
    )
}