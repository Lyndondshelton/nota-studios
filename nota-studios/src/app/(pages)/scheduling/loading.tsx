import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <SkeletonTheme baseColor="#1a1a1a">
            <Skeleton 
                width={'50vw'}
                count={10}/>
        </SkeletonTheme>
    )
}