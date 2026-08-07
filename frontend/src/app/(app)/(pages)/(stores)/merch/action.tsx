'use server';

export async function createCart(){
    /*const cookieStore = await cookies();
    console.log("Cookie Store: ", cookieStore);
    const cartCookie = cookieStore.get("cartId");
    console.log("Cart ID from Cookie: ", cartCookie);

    if(cartCookie){
        return JSON.parse(cartCookie);
    }

    if(!fwApiToken){
        throw new Error("Cart: Storefront API token is not configured.");
    }
    if(!storeBaseUrl){
        throw new Error("Cart: Store Base URL is not configured.");
    }

    const url = new URL("/v1/carts", storeBaseUrl);
    url.searchParams.set("storefront_token", fwApiToken);
    url.searchParams.set("currency", "USD");

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            items: [],
        }),
        cache: "no-store",
    });

    const responseBody = await response.text();
    // console.log("Response Body: ", responseBody);

    if (!response.ok) {
        throw new Error(
            `Failed to create cart: ${response.status} ${response.statusText}. ` +
            `Response: ${responseBody}`
        );
    }else{
        cookieStore.set('cartCookie', responseBody);
    }

    return responseBody;*/
}