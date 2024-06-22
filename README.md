Napraviti netflix.

Svaki dio koji se ponavlja vise od 1 napraviti kao komponentu.
compontenta se pravi kao funkcija

export default function Article({ title, content, onClick, contentStyle }) {
return (
<article className="article">
<h1>{title}</h1>
<p style={contentStyle}>{content}</p>
<button onClick={() => onClick()}>Read more!</button>
</article>
);
}
