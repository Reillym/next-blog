import Link from "next/link";

// using route masking and querys
const PostLink = props => (
  <div>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default PostLink;
