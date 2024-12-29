import Image from "next/image";

export default function LandingPageLogo(){
    const landingPageLogo = "/nota_logo_landing.png";

    return <Image src={landingPageLogo} alt={landingPageLogo} width={4200} height={2100} className="w-full"/>
}