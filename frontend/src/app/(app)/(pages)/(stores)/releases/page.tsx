import PageH1 from "@/app/(app)/components/global/page-h1";
import BeatCard from "@/app/(app)/components/beat-card";
import { NEW_SONG_EX, NOTA_DEFAULT_LOGO } from "@/app/(app)/constants/constants";
import { getMusicList } from "@/app/_service/app-api-service";
import { Music } from "@/app/_service/_constants/data-types";


export default async function Releases(){
    const tracks = await getMusicList();

    return (
        <>
            <PageH1 title={"Latest Releases"} />

            <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 px-7"}>
                {
                    tracks.map((track) => (
                        <BeatCard
                            key={track.id}
                            image={track.album_art ? track.album_art : NOTA_DEFAULT_LOGO}
                            audio={track.audio_url}
                            title={track.title}
                            artist={track.artist}
                            desc={track.description}
                        />
                    ))
                }
            </div>
            
        </>
    );
}