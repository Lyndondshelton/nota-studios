import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333333">
            <div className="grid grid-cols-1 gap-6 px-7 sm:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index}>

                        {/*Skeleton for the song image*/}
                        <Skeleton height={250} />

                        {/*skeleton for audio player*/}
                        <Skeleton height={24} className="mt-3" />

                        {/*skeleton for song info*/}
                        <Skeleton height={18} width="60%" />
                        <Skeleton height={40} className="mt-3" />
                    </div>
                ))}
            </div>
        </SkeletonTheme>
    )
}