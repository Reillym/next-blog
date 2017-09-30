import Layout from "../components/Layout";
// Automatically assigned to the /about route
const About = () => (
  <Layout>
    <h1>About</h1>
    <p>We like Batman TV shows, Reactjs, Nodejs, and Nextjs around here.</p>
    <style jsx>{`
      h1, p {
        font-family: 'Arial'
      }
      
      `}</style>
  </Layout>
);

export default About;
