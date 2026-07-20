const apiBaseUrl = process.env.API_BASE_URL
import {CommonApiResponse} from "@/app/_service/_constants/responses";
import {StudioEquipment, ServiceSchedule, Artist, Service} from "@/app/_service/_constants/data-types";

console.log("API Base URL from .env, ", apiBaseUrl);

export async function getStudioServices(): Promise<Service[]>{
    const response = await fetch(`${ apiBaseUrl }/studio-services/`,
        {cache: "no-store"});

    if(!response.ok){
        throw new Error("Error fetching services list");
    }

    const result: CommonApiResponse<Service[]> = await response.json();

    return result.data;
}

export async function getServiceSchedule(): Promise<ServiceSchedule[]> {
    const response = await fetch(`${ apiBaseUrl }/service-schedule/`,
        {cache: "no-store"});

    if(!response.ok){
        throw new Error("Error fetching service schedule")
    }

    const result: CommonApiResponse<ServiceSchedule[]> = await response.json();

    return result.data;
}

export async function getStudioEquipmentList(): Promise<StudioEquipment[]> {
    const response = await fetch(`${ apiBaseUrl }/studio-equipment/`, {
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Failed to fetch Equipment List from API.")
    }

    const result: CommonApiResponse<StudioEquipment[]> = await response.json();

    return result.data;
}

export async  function getArtistList(): Promise<Artist[]>{
    const response = await fetch(`${ apiBaseUrl }/artist-list/`, {
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Failed to fetch Artist List from API.")
    }

    const result: CommonApiResponse<Artist[]> = await response.json()

    return result.data
}