import Image from "next/image";
import Link from "next/link";

function ItemOverlay(){
    return(
        <>
            <div className="image-overlay ">
                <button className={" merch-button bg-gray-100  "}>View</button>
                <button className={" merch-button bg-[#F00] "}>Add to Cart</button>
            </div>
        </>
    )
}

interface StoreItem {
    name: string;
    url: string;
    alt: string;
    price: number;
    slug?: string;
}

export default function StoreItem({url, alt, price, name, slug}: StoreItem){

    return (
        <article className="mb-8">
            <Link href={`/merch/${slug ?? ""}`} aria-label={`View ${name}`}>
                <div className="image-box group">
                    <Image
                        src={url}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"/>
                </div>
            </Link>
            <div className="mt-2">
                <h2 className="mt-1 text-base leading-snug">{ name }</h2>
                <p className="my-1 text-base leading-snug">{ price }</p>
            </div>
            <button type="button" className="bg-[#F00] w-[75px] rounded-full mb-1">Add</button>
        </article>
    );

}