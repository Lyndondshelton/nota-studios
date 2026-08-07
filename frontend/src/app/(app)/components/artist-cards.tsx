import Image from "next/image";
import Link from "next/link";

export default function ArtistCards(props){
    return(
        <div className="flex flex-col mb-8">
            <Link href={props.link} target="_blank">
                <div className="image-box ">
                    <Image
                        src={props.image}
                        alt={`${props.artist} artist portrait`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"/>
                </div>
            </Link>
            <h3>{props.artist}</h3>
            <p>{props.desc}</p>
        </div>
    );
}