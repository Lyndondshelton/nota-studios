'use client'
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { Product, FourthwallVariant, FourthwallImage, formatCurrency } from "@/app/(app)/(pages)/(stores)/merch/_util/store-data-types";
import DropdownMenu from "@/app/(app)/components/dropdown-menu";

/**
 * Client component that handles states for the ___/merch/[product]___ details. Accepts Fourthwall {@Link Product}
 * details as props and renders the page details.
 * @props details - {@Link Product} details
 * @constructor
 */
export default function PageDetails(
    { details, initialImage } : {details: Product, initialImage: FourthwallImage}
){
    /**
     * The list of available sizes for the specified product.
     */
    const productSizes = details.variants.map((variant: FourthwallVariant) => (
        variant.attributes.size.name
    ));
    const [selectedSize, setSize] = useState(productSizes?.at(0));
    const [selectedColor, setColor] = useState("Black");

    /**
     * The list of available prices mapped to the associated sizes for the specified product.
     */
    const productPrices = details.variants.map((variant: FourthwallVariant)=>{
        return{
            price: formatCurrency(variant.unitPrice.value, variant.unitPrice.currency),
            size: variant.attributes.size.name,
        }
    });

    /**
     * The currently displayed price based on what available size the user selects.
     */
    const selectedPrice = productPrices.find(
        (price) => price.size === selectedSize
    )?.price;


    const [selectedImage, setImage] = useState<FourthwallImage>(initialImage);

    /**
     * Returns the HTML element to be used with __dangerouslySetInnerHTML__
     * @param html String HTML element (ex: "<br\/>")
     */
    function dangerousHtml(html: string){
        return {__html: html};
    }

    return(
        <div className={"mb-8 px-4"}>
            <section id="productDetails" className={"flex flex-row flex-wrap"}>
                <div id="productImages" className={"w-full md:w-1/2 md:px-4"}>
                    <div id="imageBox" className={"relative w-full"}>
                        <Image src={selectedImage.url}
                               alt={`${details.name} - selected image`}
                               width={selectedImage.width}
                               height={selectedImage.height}
                               sizes="(max-width: 768px) 100vw, 33vw "
                               className={
                                   "bg-white w-full h-auto rounded-xl object-contain"
                               }/>
                    </div>
                    <div id="imagePanel" className={"py-2 flex gap-2 flex-row flex-nowrap overflow-x-scroll"}>
                        {details.images.map((img: FourthwallImage, index: number) => (
                            <Image
                                key={img.id}
                                src={img.url}
                                alt={`${details.name} - ${index}`}
                                width={img.width}
                                height={img.height}
                                className={clsx(
                                        "bg-white p-1 w-1/4 h-auto rounded-xl hover:cursor-pointer",
                                        {"border-[#F00] border-4": selectedImage.id===img.id}
                                    )}
                                onClick={() => setImage(img)}/>
                        ))}
                    </div>
                </div>
                <div id="productInfoAndPurchase" className={"w-full md:w-1/2 md:px-4"}>
                    <h1 className={"mt-8 mb-2 py-2 text-2xl/8 uppercase font-bold "}>{details.name}</h1>
                    <p className={"mb-4 py-2 text-xl font-bold "}>{selectedPrice}</p>
                    <div id="buttonGroup" className={"mb-6 py-2 flex flex-row flex-wrap gap-2"}>
                        { productSizes.map((size, index) => (
                            <button key={index} className={ clsx(
                                "h-14 px-5 border-stone-800 border-2 rounded-md font-bold ",
                                { "border-[#F00] border-4 text-[#F00]": selectedSize===size }
                            )
                            }
                                onClick={() => setSize(size)}>
                                {size}
                            </button>
                        )) }
                    </div>
                    <div id="addToCartGroup" className="mb-4 py-2 flex flex-row gap-2 font-bold ">
                        <select name="item-count" id="itemCountSelect" className={"bg-black px-4 h-14 " +
                            "border-stone-800 border-2 rounded-md"}>
                            {Array.from({length: 9}, (_,index) =>  (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            )) }
                            <option value="10+">10+</option>
                        </select>
                        <button className="w-full flex-auto bg-[#F00] text-black rounded-md font-bold">Add to Cart</button>
                    </div>
                    <div id="infoGroup" className={"py-2"}>
                        {details.additionalInformation.map((info, index) => (
                            <div key={info.type}>
                                <button className={"w-full text-left text-sm font-bold my-2 py-4 uppercase"}>
                                    {info.title}
                                </button>
                                <div dangerouslySetInnerHTML={dangerousHtml(info.bodyHtml)} className="mb-8 text-sm [&_ul]:list-disc [&_ul]:ml-5" />
                                <hr className={"border-gray-800"}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="relatedProducts" className={"mb-8 py-4 md:px-4"}>
                <h2 className="text-xl text-bold uppercase">You may also like</h2>
                <div id="relatedProductGrid" className={"flex flex-row flex-wrap"}>
                {/*    Unimplemented */}
                </div>
            </section>
        </div>
    )
}