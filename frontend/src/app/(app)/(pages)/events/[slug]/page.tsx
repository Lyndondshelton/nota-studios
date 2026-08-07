export default async function Event({ params }: { params : Promise<{ slug }>}){
    const slug = await params;
    console.log("Slug: ", slug);

    return(
        <>

        </>
    );
}