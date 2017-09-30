import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

const Content = props => {
  // find a way to replace <p> </p> with spaces so we dont get an error when refreshing page
  const { name, summary, image } = props.show;
  return <div>
      <h1>{name}</h1>
      <p>{summary}</p>
      <img src={image.medium} alt={props.show.name} />
    </div>;
};

const Show = props => (
  // main page gets passed in a url prop that has the query string
  <Layout>
    <Content show={props.show} />
  </Layout>
);

Show.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
