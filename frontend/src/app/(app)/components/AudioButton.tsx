import Image from "next/image";

export default function AudioButton(props){
    return (
        <div className={"bg-white"}>
            <Image src={props.image}
                alt={props.image}
                width={50}
                height={50}/>
        </div>
    );
}