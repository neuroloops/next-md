import Link from "next/link"

export default function Post({ post }) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <p>{post.frontmatter.tittle}</p>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} legacyBehavior>
        <a className='btn'>Read More</a>
      </Link>
    </div>

  )
}
