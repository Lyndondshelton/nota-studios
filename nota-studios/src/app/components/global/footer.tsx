export default function Footer(){
    const urls = [
        {url:"https://www.notacollectivestore.com/", name:"Merch"},
        {url: "https://www.instagram.com/notastudios.pgh/", name: "Instagram"},
        {url: "https://traktra.in/notastudios.pgh", name: "Beat Store"},
        {url: "mailto:notastudios.pgh@gmail.com?bcc=dyn.theartist%40gmail.com&subject=NOTA Studios Inquiry", name: "notastudios.pgh@gmail.com"}
    ]

    return(
        <>
            <div className="h-15 footer-container mt-4">
                <div className="flex flex-wrap pt-2 px-2 max-w-screen-md min-w-96 mx-auto underline justify-center">
                    {urls.map((link, index) => (
                        <div key={index}className="mx-2 uppercase">
                            <a href={link.url}>{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}