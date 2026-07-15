import ArtistCards from "@/app/(app)/components/artist-cards";
import PageH1 from "@/app/(app)/components/global/page-h1";
import {getArtistList} from "@/app/_service/app-api-service";

export default async function MeetTheTeam(){
    const artists = await getArtistList();

    return(
        <>
            <PageH1 title="Meet the team"/>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-7">
                {
                    artists.map((artist) => (
                        <ArtistCards 
                            key={artist.id}
                            image={artist.featured_image_url}
                            artist={artist.artist_name}
                            desc={artist.artist_bio}
                            link={artist.social_link}/>
                    ))
                }
            </div>
        </>
    );
}