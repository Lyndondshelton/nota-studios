import Image from "next/image"
import { NOTA_PRIMARY_LOGO } from "@/app/constants/constants";

export default function HeaderLogo(){
    return <Image src={NOTA_PRIMARY_LOGO} alt={NOTA_PRIMARY_LOGO} height="118" width="118" className=""/>;
}