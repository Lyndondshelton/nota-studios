//Images
export const NOTA_PRIMARY_LOGO = "/nota_logo_primary-transp.png";
export const NOTA_DEFAULT_LOGO = "/nota_logo_primary.png";
export const NOTA_LANDING_LOGO = "/nota_logo_landing.png";
export const PLUS_ICON = "/plus-svgrepo-com.svg";
export const MENU_ICON = "/menu-duo-md.svg";
export const CROSS_ICON = "/cross.svg";
export const PLAY_BUTTON = "/flaticon_com/play-buttton.png";
export const PAUSE_BUTTON = "/flaticon_com/pause.png";
export const ALBUM_ART_EX = "/imgs/album-art/random_album_cover.jpg"

//data
export const NAV_LINKS = [
    {
        name: "HOME",
        path: "/"
    },
    {
        name: "SERVICES",
        path: "/services"
    },
    {
        name: "MEET THE TEAM",
        path: "/meet-the-team"
    },
    {
        name: "SCHEDULING",
        path: "/scheduling"
    },
    {
        name: "RELEASES",
        path: "/releases"
    },
    // {
    //     name: "MERCH STORE",
    //     path: "/merch"
    // }


]

export const APP_URLS = [
    {url:"https://www.notacollectivestore.com/", name:"Merch", target:"_blank"},
    {url: "https://www.instagram.com/notastudios.pgh/", name: "Instagram", target:"_blank"},
    {url: "https://traktrain.com/notastudios.pgh", name: "Beat Store", target:"_blank"},
    {url: "mailto:notastudios.pgh@gmail.com?cc=dyn.theartist@gmail.com&subject=NOTA%20Studios%20Inquiry&body=Name%2FArtist%20Name%3A%20%0A%0AService(s)%20needed%3A%20%0A%0APlease%20tell%20us%20more%3A%20", name: "notastudios.pgh@gmail.com", target:"_self"}
];

//Components
export const BOOKING_BTN = <button className="uppercase 
    text-gray-900 
    border 
    border-gray-300 
    focus:outline-none 
    hover:bg-gray-100 
    focus:ring-4 
    focus:ring-gray-100 
    font-medium 
    rounded-lg 
    px-5 
    py-2.5 
    me-2 
    mb-2 
    dark:text-white 
    dark:border-gray-600 
    dark:hover:bg-gray-700 
    dark:hover:border-gray-600 
    dark:focus:ring-gray-700">Book a session</button>

export const NEW_SONG_EX = {
    image_url: ALBUM_ART_EX,
    image_alt: "Image Alt",
    song_title: "New Song Title",
    song_description: "New song description",
    download_link: "/"
}