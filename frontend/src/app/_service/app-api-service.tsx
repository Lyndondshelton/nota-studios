import {CommonApiResponse} from "@/app/_service/_constants/responses";
import {StudioEquipment, ServiceSchedule, Artist, Service, Music, Blog} from "@/app/_service/_constants/data-types";
import { Product } from "@/app/(app)/(pages)/(stores)/merch/_util/store-data-types";

const apiBaseUrl = process.env.API_BASE_URL
const fwApiToken = process.env.FOURTHWALL_API_TOKEN;
const storeBaseUrl = process.env.FW_BASE_URL
const STOREFRONT_TOKEN = "storefront_token";

function validateEnv(){
    if (!fwApiToken) {
        throw new Error("Storefront API token is not configured.");
    }
    if(!storeBaseUrl){
        throw new Error("Store Base URL is not configured.");
    }
}

type FourthwallResponse = {
    results: Product[];
    paging: object;
}


export async function getAllProducts(): Promise<FourthwallResponse>{
    validateEnv();

    const url = new URL("/v1/collections/all/products", storeBaseUrl);
    url.searchParams.set(STOREFRONT_TOKEN, fwApiToken);

    const response = await fetch(url, {cache: 'no-cache'});

    const { results, paging } = await response.json();

    return { results, paging };
}

export async function getMerchDetails(slug: string): Promise<Product>{
    validateEnv();

    const url = new URL(`/v1/products/${slug}`, storeBaseUrl);
    url.searchParams.set(STOREFRONT_TOKEN, fwApiToken);

    const response = await fetch(url, {cache: 'no-cache'})

    const result = await response.json();

    return result;
}

export async function getStudioServices(): Promise<Service[]>{
    const response = await fetch(`${ apiBaseUrl }/studio-services/`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            cache: "force-cache",
            next: {
                revalidate: 86400,
                tags: ["services"]
            },
        });

    if(!response.ok){
        throw new Error("Error fetching services list");
    }

    const result: CommonApiResponse<Service[]> = await response.json();

    return result.data;
}

export async function getServiceSchedule(): Promise<ServiceSchedule[]> {
    const response = await fetch(`${ apiBaseUrl }/service-schedule/`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        cache: "force-cache",
        next: {
            revalidate: 86400,
            tags: ["services"]
        },
    });

    if(!response.ok){
        throw new Error("Error fetching service schedule")
    }

    const result: CommonApiResponse<ServiceSchedule[]> = await response.json();

    return result.data;
}

export async function getStudioEquipmentList(): Promise<StudioEquipment[]> {
    const response = await fetch(`${ apiBaseUrl }/studio-equipment/`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        cache: "force-cache",
        next: {
            revalidate: 86400,
            tags: ["equipment", "services"]
        },
    });

    if(!response.ok){
        throw new Error("Failed to fetch Equipment List from API.")
    }

    const result: CommonApiResponse<StudioEquipment[]> = await response.json();

    return result.data;
}

export async  function getArtistList(): Promise<Artist[]>{
    const response = await fetch(`${ apiBaseUrl }/artist-list/`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        cache: "no-store",
    });

    if(!response.ok){
        throw new Error("Failed to fetch Artist List from API.")
    }

    const result: CommonApiResponse<Artist[]> = await response.json()

    return result.data
}

export async function getMusicList(): Promise<Music[]> {
    const response = await fetch(`${apiBaseUrl}/music-list/`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        cache: "no-store",
    });

    if(!response.ok){
        throw new Error("Failed to fetch Music List from API.")
    }

    const result: CommonApiResponse<Music[]> = await response.json();

    return result.data;
}

export async function getBlogPost(post: string): Promise<Blog>{
    const response = await fetch(`${apiBaseUrl}/blog/${post}`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
        cache: "no-store",
    });

    console.log("Response before getting json: ", response);

    const result: CommonApiResponse<Blog> = await response.json();

    if(result && result.data === null && result.status === 'ERROR'){
        console.error(`Error fetching blog post ${post}: `, result.message);
    }

    console.log("Result as json: ", result);

    return result.data;
}