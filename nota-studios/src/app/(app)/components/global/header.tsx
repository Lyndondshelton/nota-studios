import HeaderLogo from "./header-logo";
import NavLinks from "./nav-links";
// import NavDropdown from "./nav-dropdown";

export default function Header(){
    return(
        <>
            <div className="flex flex-nowrap items-center w-full md:mt-14">
                <div id="headerLogo" className="w-1/3 absolute z-20">
                    <HeaderLogo />
                </div>
                <div id="headerNav" className="w-full z-10 relative flex justify-center">
                    <div className="text-center md:inline-flex flex-wrap md:justify-center">
                        <NavLinks />
                    </div>
                </div>
                {/* <NavDropdown /> */}
            </div>
        </>
    );
}