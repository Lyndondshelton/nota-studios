export default async function BlogPostPage({
     params,
 }: {
     params: Promise<{post: string }>
 }) {
    const { post } = await params;

    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, ante non imperdiet fermentum, nisl erat consectetur mi, cursus lobortis nibh sapien in enim. Suspendisse placerat convallis erat, quis mattis erat aliquam nec. Vivamus blandit ante venenatis lobortis pellentesque. Sed ornare, tortor eu rutrum molestie, dolor urna vestibulum neque, nec consequat leo tellus ac urna. Quisque dignissim porttitor enim id placerat. Etiam magna sapien, interdum non mauris in, congue varius dui. Aenean ac aliquam urna.

                Mauris imperdiet sem vel nisi gravida, a scelerisque tellus lobortis. Integer quis rhoncus sapien. Integer vitae dignissim risus, eget viverra nibh. Pellentesque eget lectus bibendum, rhoncus sem et, feugiat arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tincidunt diam vitae elit dignissim pellentesque. Vivamus sagittis eros sit amet suscipit lobortis. Morbi vitae congue lectus. Maecenas rhoncus augue condimentum lorem convallis mattis.

                Proin sit amet tellus nec velit posuere volutpat. Fusce gravida scelerisque tellus sed aliquet. Donec accumsan nulla erat, quis ultricies erat interdum ac. Aliquam ac tortor a ex ultricies interdum. In hac habitasse platea dictumst. Aenean quis dapibus diam. Mauris non dictum nisi, in finibus nisl. Donec auctor, eros porta bibendum malesuada, dui augue faucibus metus, vel laoreet enim elit sit amet turpis. Ut eget urna sem. Curabitur aliquet vel nisl non dictum. Donec congue nibh at ornare eleifend. Quisque cursus lorem vel mattis vulputate. Nunc ex ligula, molestie at risus nec, ullamcorper maximus nibh. Cras vitae leo et ex accumsan semper. Nullam sit amet sem egestas, commodo dui hendrerit, finibus erat.

                Nunc velit turpis, finibus ut scelerisque eget, sodales non erat. Nunc hendrerit pretium ex, sed tincidunt massa pretium nec. Donec ac risus purus. Nunc facilisis eu lacus sit amet fermentum. Aliquam quis laoreet odio. Vestibulum sem nulla, iaculis non risus a, aliquam feugiat tortor. Integer massa sem, egestas nec posuere commodo, luctus ut est. Proin est enim, suscipit nec blandit sit amet, pulvinar non est.

                Duis ullamcorper sollicitudin velit rhoncus scelerisque. Donec tortor risus, vehicula in arcu at, malesuada fringilla ante. Integer porttitor massa leo, congue mattis justo malesuada blandit. Duis nec eros eu risus viverra gravida. Morbi id leo ultrices, viverra enim et, laoreet tellus. Sed congue, odio a accumsan facilisis, dui nibh volutpat nisl, at euismod diam purus ut neque. Mauris rhoncus lectus nec tellus suscipit, non sollicitudin turpis iaculis. Nunc dapibus vestibulum auctor. Nullam velit eros, tempus id dui non, rhoncus rutrum odio. Curabitur at sem fermentum, viverra neque id, lobortis ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum in erat venenatis sapien mollis posuere. Nunc vel nibh at leo feugiat dignissim. Nam rutrum tellus dolor, eu aliquet tortor placerat et.`
    
    return (

        <div>
            <h2 className="text-4xl">Title: { post }</h2>
            <p className="whitespace-pre-line"> { content } </p>
        </div>
    );
}