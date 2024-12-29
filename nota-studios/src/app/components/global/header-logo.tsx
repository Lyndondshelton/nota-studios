import Image from "next/image"

export default function HeaderLogo(){
    const notaLogo = "/nota_logo_primary.png";

    return <Image src={notaLogo} alt={notaLogo} height="118" width="118" className=""/>;

}