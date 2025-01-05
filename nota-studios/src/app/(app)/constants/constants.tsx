//data
export const APP_URLS = [
    {url:"https://www.notacollectivestore.com/", name:"Merch"},
    {url: "https://www.instagram.com/notastudios.pgh/", name: "Instagram"},
    {url: "https://traktra.in/notastudios.pgh", name: "Beat Store"},
    {url: "mailto:notastudios.pgh@gmail.com?bcc=dyn.theartist%40gmail.com&subject=NOTA Studios Inquiry", name: "notastudios.pgh@gmail.com"}
];

export const SERVICES_LIST = [
        {
            serviceName: "Recording Sessions",
            serviceDesc: "Visit our studio for professional quality vocal recording and mixing sessions. Our engineers will work with you to help you bring your best in the booth and provide the highest sound quality possible.",
            servicePrice: "$50 per hour"
        },
        {
            serviceName: "Mixing + Mastering",
            serviceDesc: "We offer additional mixing and song mastering outside of session hours.",
            servicePrice: "Mixing - $100 per song\nMastering - $100 per song\nBUNDLE - $150 per song"
        },
        {
            serviceName: "Production",
            serviceDesc: "Tell us what you need, and we’ll make you a beat from scratch. Fully mixed, mastered, and delivered to you directly.\nYou can also browse our Traktrain page for any beats we have for lease or exclusive license.",
            servicePrice: "$50 lease or $100 exclusive"
        },
        {
            serviceName: "Graphic Design",
            serviceDesc: "Whether you need cover art for your upcoming album, a flyer for your next gig, or a new artist logo, we’ve got you covered.",
            servicePrice: "Pricing starts at $50 and varies per project"
        },
        {
            serviceName: "Photography",
            serviceDesc: "We provide photography services for promotional photos, event, behind-the-scenes, album artwork, etc.",
            servicePrice: "$50 per hour\n$300 for events"
        },

    ];

export const STUDIO_HOURS = [
        {day:"Monday", hours:"4:00PM - 12:00AM"},
        {day:"Tuesday", hours:"4:00PM - 12:00AM"},
        {day:"Wednesday", hours:"4:00PM - 12:00AM"},
        {day:"Thursday", hours:"4:00PM - 12:00AM"},
        {day:"Friday", hours:"4:00PM - 12:00AM"},
        {day:"Saturday", hours:"4:00PM - 12:00AM"},
        {day:"Sunday", hours:"4:00PM - 12:00AM"},
    ];
export const STUDIO_EQUIPMENT =[
        "FL Studios + Pro Tools + Garage Band",
        'KRK CLASSIC 5" MONITORS',
        "FOCUSRITE CM25 MKIII CONDENSER MICROPHONE",
        "SSL 2+ AUDIO INTERFACE",
        "ALESIS V25 MIDI KEYBOARD"
    ];

//Images
export const NOTA_PRIMARY_LOGO = "/nota_logo_primary.png";
export const NOTA_LANDING_LOGO = "/nota_logo_landing.png";
export const PLUS_ICON = "/plus-svgrepo-com.svg";
export const CROSS_ICON = "/cross.svg";
export const MENU_ICON = "/menu-duo-md.svg";

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