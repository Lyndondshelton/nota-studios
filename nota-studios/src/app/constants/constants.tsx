//Images
export const NOTA_PRIMARY_LOGO = "/nota_logo_primary.png";
export const NOTA_LANDING_LOGO = "/nota_logo_landing.png";
export const PLUS_ICON = "/plus-svgrepo-com.svg";
export const MENU_ICON = "/menu-duo-md.svg";
export const CROSS_ICON = "/cross.svg";

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
]

export const APP_URLS = [
    {url:"https://www.notacollectivestore.com/", name:"Merch", target:"_blank"},
    {url: "https://www.instagram.com/notastudios.pgh/", name: "Instagram", target:"_blank"},
    {url: "https://traktrain.com/notastudios.pgh", name: "Beat Store", target:"_blank"},
    {url: "mailto:notastudios.pgh@gmail.com?cc=dyn.theartist@gmail.com&subject=NOTA%20Studios%20Inquiry&body=Name%2FArtist%20Name%3A%20%0A%0AService(s)%20needed%3A%20%0A%0APlease%20tell%20us%20more%3A%20", name: "notastudios.pgh@gmail.com", target:"_self"}
];

export const SERVICES_LIST = [
        {
            serviceName: "Recording Sessions",
            serviceDesc: "Bring your music to life in our professional recording studio. Whether you're a "
                        +"seasoned artist or stepping into the booth for the first time, our experienced " 
                        +"engineers are here to guide you every step of the way. We specialize in delivering "
                        +"crystal-clear vocal recordings and polished mixes that match industry standards. "
                        +"\n\nWork in a creative, comfortable environment where your best performances shine. "
                        +"Let's collaborate to achieve the sound you’ve envisioned.",
            servicePrice: "Rates: $50 per hour",
        },
        {
            serviceName: "Mixing + Mastering",
            serviceDesc: "Get professional mixing and mastering from the comfort of your own space. Our expert "
                        +"engineers will work remotely to bring your tracks to life, ensuring top-quality sound "
                        +"and industry-ready results. "
                        +"\n\nSend us your stems, and we’ll handle the rest—delivering polished, radio-ready tracks "
                        +"without the need to be in the studio.",
            servicePrice: "Mixing - $100 per song\nMastering - $100 per song\nBundle (Mixing & Mastering) - $150 per song"
        },
        {
            serviceName: "Production",
            serviceDesc: "Looking for a unique, high-quality beat? Let us craft one for you from scratch. We’ll "
                        +"work closely with you to capture your vision, creating a fully mixed and mastered beat "
                        +"that’s ready for you to use. "
                        +"\n\nYour sound, your style—brought to life with professional production. ",
            servicePrice: "Lease: $50\nExclusive License: $100",
            serviceSubDesc: "Additionally, explore our Traktrain page for pre-made beats."
        },
        {
            serviceName: "Graphic Design",
            serviceDesc: "Bring your vision to life with custom graphic design for any of your music-related needs. "
                        +"From eye-catching album cover art and promotional flyers to unique artist logos, we provide "
                        +"creative designs that capture your style and message."
                        +"\n\nLet’s create something memorable for your brand!",
            servicePrice: "Pricing starts at $50, with rates varying based on the complexity and scope of each project."
        },
        {
            serviceName: "Photography",
            serviceDesc: "Elevate your image with professional photography. From promotional photos and album artwork "
                        +"to behind-the-scenes shots and event coverage, we specialize in creating visuals that showcase "
                        +"your unique style and personality.",
            servicePrice: "Hourly Rate: $50\nEvent Coverage: $300"
        },

    ];

export const ARTIST_LIST = [
    {
        artistName: "DYN",
        imgPath:    "/dyn.jpg",
        artistBio:  "DYN is a songwriter, rapper, singer, producer, photographer, he began making music in high school, " 
                  + "forming numerous connections in the local music scene. With a decade of production experience under "
                  + "his belt, he’s set out to transform the underground music scene in the greater Pittsburgh area. ",
        socialLink: "",
    },
    {
        artistName: "CHUCK!",
        imgPath:    "/chuck.jpg",
        artistBio:  "CHUCK! is a songwriter, rapper, singer, producer, and audio "
                    +"engineer. Coming to NOTA studios with years of prior studio experience, "
                    +"he has an ear for hits and a passion for his craft that sets him apart "
                    +"from the rest.",
        socialLink:"",
    },
    {
        artistName: "ABSNT",
        imgPath:    "/absnt.jpg",
        artistBio:  "ABSNT is a multimedia artist, graphic designer, songwriter, "
                    +"rapper, producer, and audio engineer. Between creating albums of "
                    +"his own from top to bottom in his home studio, to engineering projects "
                    +"for a number of talented artists, he’s developed a reputation as an "
                    +"artist of many trades and a passionate collaborator.",
        socialLink:"",
    },
    {
        artistName: "Zylyny",
        imgPath: "/zylyny.jpg",
        artistBio:  "The latest member of NOTA Collective and NOTA Studios.",
        socialLink:"",
    },
]

export const STUDIO_HOURS = [
        {day:"Monday", hours:"4:00PM - 12:00AM"},
        {day:"Tuesday", hours:"4:00PM - 12:00AM"},
        {day:"Wednesday", hours:"4:00PM - 12:00AM"},
        {day:"Thursday", hours:"4:00PM - 12:00AM"},
        {day:"Friday", hours:"4:00PM - 12:00AM"},
        {day:"Saturday", hours:"12:00AM - 12:00AM"},
        {day:"Sunday", hours:"12:00AM - 12:00AM"},
    ];
export const STUDIO_EQUIPMENT =[
        "FL Studios + Pro Tools + Garage Band",
        'KRK CLASSIC 5" MONITORS',
        "FOCUSRITE CM25 MKIII CONDENSER MICROPHONE",
        "SSL 2+ AUDIO INTERFACE",
        "ALESIS V25 MIDI KEYBOARD"
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