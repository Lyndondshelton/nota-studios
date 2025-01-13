import ArtistCards from "../../components/artist-cards";
import PageH1 from "../../components/global/page-h1";
import { ARTIST_LIST } from "../../constants/constants";

export default function MeetTheTeam(){
    return(
        <>
            <PageH1 title="Meet the team"/>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-7">
                {
                    ARTIST_LIST.map((artist) => (
                        <ArtistCards 
                            key={artist.artistName} 
                            image={artist.imgPath} 
                            artist={artist.artistName} 
                            desc={artist.artistBio}/>
                    ))
                }
            </div>
        </>
    );
}