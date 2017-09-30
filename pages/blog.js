import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <li key={post.id}>
          <PostLink id={post.id} title={post.title} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
);

export default Blog;
