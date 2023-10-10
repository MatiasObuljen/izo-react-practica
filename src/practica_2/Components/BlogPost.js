import Body from "./Body";
import Title from "./Title";

export default function BlogPost ({ title, body }) {
    return (
        <article>
            <Title title={title} />
            <Body body={body} />
        </article>
    )
}