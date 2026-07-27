export default async function ArtistPage({
        params,
    } : {
        params: Promise<{ artist }>
    }) {
    const { artist } = await params;

    return (
        <>

        </>
    );
}