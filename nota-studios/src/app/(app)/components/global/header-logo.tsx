import Image from "next/image"
import { NOTA_PRIMARY_LOGO } from "../../constants/constants";

export default function HeaderLogo(){
    const LOGO_SIZE = "118";
    return <Image src={NOTA_PRIMARY_LOGO} alt={NOTA_PRIMARY_LOGO} height={LOGO_SIZE} width={LOGO_SIZE} className=""/>;
}