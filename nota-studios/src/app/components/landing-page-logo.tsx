import Image from "next/image";
import { NOTA_LANDING_LOGO } from "../constants/constants";

export default function LandingPageLogo(){
    return <Image src={NOTA_LANDING_LOGO} alt={NOTA_LANDING_LOGO} width={4200} height={2100} className="w-full"/>
}