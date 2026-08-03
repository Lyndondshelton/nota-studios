import { cookies } from 'next/headers';
import Image from 'next/image'
import { getAllProducts, fwApiToken, storeBaseUrl } from "@/app/_service/app-api-service";
import { Product, FourthwallImage, FourthwallVariant, CurrencyMap } from "./store-data-types";
import StoreItem from "./merch-store-item";
import PageH1 from "@/app/(app)/components/global/page-h1";

export default async function Merch(){
    const result = await getAllProducts();
    const products: Product[] = result.results;
    const firstProduct: Product = products.at(0);
    const page = result.paging;

    const formatCurrency = (value: number, currency: string) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
        }).format(value);
    };

    // console.log("Products List: ", products);

    return(
        <>
            <PageH1 title={"MERCH STORE"}/>
            <div className="merch-card-grid">
                {products.map((product) => {
                    const featuredImage = product.images.at(0);
                    const variants: FourthwallVariant[] = product.variants;

                    if (!featuredImage || variants.length === 0) {
                        return null;
                    }

                    const numericPrices = variants.map((variant) =>
                        Number(variant.unitPrice.value)
                    );

                    const minimumPrice = Math.min(...numericPrices);
                    const maximumPrice = Math.max(...numericPrices);
                    const currency = variants[0].unitPrice.currency;

                    const priceDesc =
                        minimumPrice === maximumPrice
                            ? formatCurrency(minimumPrice, currency)
                            : `${formatCurrency(minimumPrice, currency)} – ${formatCurrency(
                                maximumPrice,
                                currency
                            )}`;

                    return (
                        <StoreItem
                            key={product.id}
                            url={featuredImage.url}
                            alt={product.name}
                            price={priceDesc}
                            name={product.name}
                        />
                    );
                })}
            </div>
        </>
    );
}