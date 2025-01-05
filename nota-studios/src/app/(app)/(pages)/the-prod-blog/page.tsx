import { getPayload } from "payload";
import config from '@payload-config';

export default async function TheProdBlog(){
    const payload = await getPayload({config});
    
    const blogs = await payload.find({
        collection: 'posts',
    });
    
    console.log(blogs);

    return(
        <>
        </>
    );
}