'use client';
import { InlineWidget } from "react-calendly"
import PageH1 from "../../components/global/page-h1";

export default function Scheduling(){
    return(
        <>
            <PageH1 title="Scheduling"/>
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