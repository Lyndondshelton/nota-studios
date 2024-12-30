import HeaderLogo from "./header-logo";
import NavLinks from "./nav-links";

export default function Hedaer(){
    return(
        <>
            <div className="flex flex-nowrap items-center w-full">
                <div id="headerLogo" className="w-1/3">
                    <HeaderLogo />
                </div>
                <div id="headerNav" className="w-1/3 flex justify-center">
                    <div className="inline-flex flex-wrap justify-center">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </>
    );
}