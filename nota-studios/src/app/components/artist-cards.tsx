import Image from "next/image";

export default function ArtistCards(props){
    return(
        <div className="flex flex-col">
            <div className="w-full aspect-square relative">
                <Image 
                    className="object-center" 
                    src={props.image} 
                    alt={props.image} 
                    layout="fill"
                    objectFit="cover"/>
            </div>
            <h3>{props.artist}</h3>
            <p>{props.desc}</p>
        </div>
    );
}