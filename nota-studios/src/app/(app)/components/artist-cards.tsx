import Image from "next/image";
import Link from "next/link";

export default function ArtistCards(props){
    return(
        <div className="flex flex-col">
            <Link href={props.link} target="_blank">
                <div className="w-full aspect-square relative">
                    <Image 
                        className="object-center" 
                        src={props.image} 
                        alt={props.image} 
                        layout="fill"
                        objectFit="cover"/>
                </div>
            </Link>
            <h3>{props.artist}</h3>
            <p>{props.desc}</p>
        </div>
    );
}