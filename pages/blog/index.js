import Link from "next/link";

export async function getAllPosts() {
  const context = require.context("./posts", false, /\.js$/);

  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const { meta } = await import(`./posts/${post}`);

    posts.push({
      slug: post.replace(".js", ""),
      title: meta.title
    });
  }
  return posts;
}

export default function Blog({ posts }) {
  return (
    <div className="page">
      <h2 className="page__title">Blog and tutorials</h2>
      <section className="section">
        <div className="section__container">
          <ul className="tile__container">
            {posts.map((post, idx) => (
              <li className="tile" key={idx}>
                <Link href={"/blog/posts/" + post.slug}>
                  <a className="tile__link">{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  };
}
