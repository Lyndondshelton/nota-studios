import ArtistCards from "@/app/(app)/components/artist-cards";
import PageH1 from "@/app/(app)/components/global/page-h1";
import { NOTA_PRIMARY_LOGO } from "@/app/(app)/constants/constants";

export default function MeetTheTeam(){
    return(
        <>
            <PageH1 title="Meet the team"/>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-7">
                <ArtistCards image="/dyn.jpg"   artist="DYN"   
                    desc="DYN is a songwriter, rapper, singer, producer, photographer, 
                    and the owner of NOTA Studios. Born and raised in Pittsburgh, PA, 
                    he began making music in high school, forming numerous connections 
                    in the local music scene. With a decade of production experience under 
                    his belt, he’s set out to transform the underground music scene in the 
                    greater Pittsburgh area."
                />
                <ArtistCards image="/chuck.jpg" artist="CHUCK!"
                    desc="CHUCK! is a songwriter, rapper, singer, producer, and audio 
                    engineer. Coming to NOTA studios with years of prior studio experience, 
                    he has an ear for hits and a passion for his craft that sets him apart 
                    from the rest."    
                />
                <ArtistCards image="/absnt.jpg"  artist="ABSNT" 
                    desc="ABSNT is a multimedia artist, graphic designer, songwriter, 
                    rapper, producer, and audio engineer. Between creating albums of 
                    his own from top to bottom in his home studio, to engineering projects 
                    for a number of talented artists, he’s developed a reputation as an 
                    artist of many trades and a passionate collaborator."
                />
                <ArtistCards image={NOTA_PRIMARY_LOGO} artist="Zylyny"
                    desc="The latest member of NOTA Collective and NOTA Studios."
                />
            </div>
        </>
    );
}