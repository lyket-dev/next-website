import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="page">
      <section className="page__section">
        <h2 className="page__title">Blog and tutorials</h2>
        <ul className="tile__container">
          {posts.map((post, idx) => (
            <li className="tile" key={idx}>
              <Link href={"/blog/posts/" + post.slug}>
                <a className="tile__link">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
