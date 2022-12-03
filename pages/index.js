import path from "path"
import fs from 'fs'
import Head from 'next/head'
import matter from "gray-matter"
import Post from "../components/Post"
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}


// to fetch data during build
export async function getStaticProps() {
  // Get files from the post dir
  const files = fs.readdirSync(path.join('posts'))


  // get slug and frontmatter from posts
  const posts = files.map(filename => {
    // crete slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    console.log(markdownWithMeta)


    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug, frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}