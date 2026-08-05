import Image from 'next/image';
import PageH1 from "@/app/(app)/components/global/page-h1";
import { getMerchDetails } from "@/app/_service/app-api-service";
import { Product, FourthwallVariant } from "../_util/store-data-types";

export default async function ItemDetails({
    params
} : {
    params: Promise<{ slug: string}>
}) {
    const { product } = await params;
    const details: Product = await getMerchDetails(product);

    // console.log("Product details: ", details);

    const selectedSize = "S";
    const selectedColor = "Black";

    const productSizes = details.variants.map((variant: FourthwallVariant) => (
        variant.attributes.size.name
    ))

    console.log(productSizes);

    const productVariant = details.variants.find((variant: FourthwallVariant) => {
        // console.log("Variant Attr:", variant.attributes);
        const variantSize: string = variant.attributes.size.name;
        const variantColor: string = variant.attributes.color.name;
        return variantSize.toUpperCase() === selectedSize.toUpperCase()
            && variantColor.toUpperCase() === selectedColor.toUpperCase();
    });




    return (
        <>
            <header>
                <PageH1 title={"Merch Details"}/>
            </header>
            <section>
                <div className="flex flex-col mx-4 ">
                    <div className="flex flex-row basis-full m-4 relative aspect-square">
                        <Image src={details.images.at(0).url}
                               alt={"First image"}
                               fill={true}
                               // width={details.images.at(0).width}
                               // height={details.images.at(0).height}
                               objectFit={"contain"}
                               size={"(max-width: 768px) 100vw, 33vw "}
                        />
                    </div>
                    <h2 className="text-xl leading-relaxed font-bold">{details.name}</h2>
                    <ul className="flex flex-wrap gap-4">
                        {productSizes.map((size: string) => (
                            <li className="basis-5">
                                <button className="bg-white text-black w-full px-3">{size}</button>
                            </li>
                        ))}
                    </ul>
                    <p>{details.description}</p>
                </div>
            </section>
        </>
    );
}