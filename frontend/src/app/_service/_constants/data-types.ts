export type StudioEquipment = {
    id: number;
    name: string;
    description: string;
};

export type ServiceSchedule = {
    day_of_week: number;
    day_name: string;
    start_time: string;
    end_time: string;
}

export type Service = {
    id: number,
    name: string,
    desc: string,
    sub_desc: string,
    price_desc: string
}

export type Artist = {
    id: number;
    artist_name: string;
    artist_bio: string;
    featured_image_url: string;
    featured_image_alt: string;
    social_link: string;
}

export type Music = {
    id: number;
    title: string;
    artist: string;
    description: string | null;
    audio_url: string;
    album_art: string;
    is_published: boolean;
}