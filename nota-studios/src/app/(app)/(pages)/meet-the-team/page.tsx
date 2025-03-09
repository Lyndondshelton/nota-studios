import { getPayload } from "payload";
import config from "@/payload.config";
import ArtistCards from "../../components/artist-cards";
import PageH1 from "../../components/global/page-h1";

export default async function MeetTheTeam(){
    const payload = await getPayload({config});
    const artists = await payload.find({
        collection: 'artists',
    });

    return(
        <>
            <PageH1 title="Meet the team"/>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-7">
                {
                    artists.docs.map((artist) => (
                        <ArtistCards 
                            key={artist.artistName} 
                            image={artist.imagePath} 
                            artist={artist.artistName} 
                            desc={artist.artistBio}
                            link={artist.socialLink}/>
                    ))
                }
            </div>
        </>
    );
}