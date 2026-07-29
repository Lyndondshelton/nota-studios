import { Suspense } from 'react';
import ArtistCards from "@/app/(app)/components/artist-cards";
import PageH1 from "@/app/(app)/components/global/page-h1";
import { getArtistList } from "@/app/_service/app-api-service";
import { Artist } from "@/app/_service/_constants/data-types";
import Loading from "./loading";

async function TeamGrid(){
    const artists = await getArtistList();

    return(
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-7">
            {
                artists.map((artist: Artist) => (
                    <ArtistCards
                        key={artist.id}
                        image={artist.featured_image_url}
                        artist={artist.artist_name}
                        desc={artist.artist_bio}
                        link={artist.social_link}/>
                ))
            }
        </div>
    );
}

export default async function MeetTheTeam(){

    return(
        <>
            <PageH1 title="Meet the team"/>
            <Suspense fallback={<Loading />}>
                <TeamGrid />
            </Suspense>
        </>
    );
}