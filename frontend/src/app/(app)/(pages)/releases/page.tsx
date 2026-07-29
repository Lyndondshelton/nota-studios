import { Suspense } from 'react';
import PageH1 from "@/app/(app)/components/global/page-h1";
import BeatCard from "@/app/(app)/components/beat-card";
import { NOTA_DEFAULT_LOGO } from "@/app/(app)/constants/constants";
import { getMusicList } from "@/app/_service/app-api-service";
import Loading from "./loading";

/**
 * Loads asynchronous data from getMusicList().
 *
 * Returns the HTML structure for the Grid on tracks on the Releases page.
 *
 * @constructor
 */
async function TrackGrid(){
    const tracks = await getMusicList();

    return (
        <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 px-7"}>
            {
                tracks.map((track) => (
                    <BeatCard
                        key={track.id}
                        image={track.album_art ? track.album_art : NOTA_DEFAULT_LOGO}
                        audio={track.audio_url}
                        title={track.title}
                        artist={track.artist.name}
                        desc={track.description}
                    />
                ))
            }
        </div>
    );
}

/**
 * The default function for the **Releases** Page.
 *
 * Loads the static non-asynchronous elements and wraps asynchronous elements in a Suspense element.
 *
 * @constructor
 */
export default function Releases(){
    return (
        <>
            <PageH1 title={"Latest Releases"} />
            <Suspense fallback={<Loading />}>
                <TrackGrid />
            </Suspense>
        </>
    );
}