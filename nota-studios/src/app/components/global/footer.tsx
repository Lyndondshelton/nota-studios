import { APP_URLS } from "@/app/constants/constants";

export default function Footer(){
    return(
        <div className="h-15 footer-container mt-4">
            <div className="flex flex-wrap p-2 max-w-screen-md min-w-96 mx-auto h-20 underline justify-center items-center">
                {APP_URLS.map((link, index) => (
                    <div key={index}className="mx-2 uppercase">
                        <a href={link.url} target={link.target}>{link.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}