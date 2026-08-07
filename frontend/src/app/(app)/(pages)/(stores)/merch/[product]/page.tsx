import Image from 'next/image';
import { getMerchDetails } from "@/app/_service/app-api-service";
import PageDetails from "./details";

/**
 * This page fetches the selected product details from
 * ___app-api-service.{@Link getMerchDetails}___ using the slug passed to params.
 *
 * @props params
 * @constructor
 */
export default async function ItemDetails({
    params
} : {
    params: Promise<{ product: string}>
}) {
    const { product } = await params;
    const details: Product = await getMerchDetails(product);

    const initialImage = details.images.at(0);
    if(!initialImage){
        return <></>
    }

    return (
        <>
            <PageDetails
                details={details}
                initialImage={initialImage}/>
        </>
    );
}