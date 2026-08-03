import { getBlogPost } from "@/app/_service/app-api-service"

export default async function BlogPostPage({
     params,
 }: {
     params: Promise<{ post: string }>
 }) {
    const { post } = await params;

    const article = await getBlogPost(post);

    const blogHeaderClass = "text-4xl"
    const blogSubHeaderClass = "text-xl italic text-gray-400 mb-5"
    const blogContentClass = "whitespace-pre-line mt-5"
    const noContentHeader = "We're sorry...";
    const noContentPage = "We're unable to find that article at the moment.\n" +
        "Try reading one of our other blog posts in the meantime.";

    return (
        <>
            <article className="m-3">

                { article && (
                    <>
                        <h1 className={blogHeaderClass}>{article.title}</h1>
                        <h2 className={blogSubHeaderClass}>{article.sub_title}</h2>

                        <section className={blogContentClass}> {article.content} </section>
                    </>
                )}
                {!article && (
                    <>
                        <h1 className={blogHeaderClass}>{noContentHeader}</h1>

                        <p className={blogContentClass}>
                            {noContentPage}
                        </p>
                    </>
                )}
            </article>
        </>
    );
}