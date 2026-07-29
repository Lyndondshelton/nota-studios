const apiBaseUrl = process.env.API_BASE_URL
import {CommonApiResponse} from "@/app/_service/_constants/responses";
import {StudioEquipment, ServiceSchedule, Artist, Service, Music, Blog} from "@/app/_service/_constants/data-types";

console.log("API Base URL from .env, ", apiBaseUrl);

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
        cache: "force-cache",
        next: {
            revalidate: 600,
            tags: ["artists", "team"]
        },
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
        cache: "force-cache",
        next: {
            revalidate: 60,
            tags: ["tracks", "music"]
        },
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
        cache: "force-cache",
        next: {
            revalidate: 60,
            tags: ["blog"]
        },
    });

    const result: CommonApiResponse<Blog> = await response.json();

    return result.data;
}