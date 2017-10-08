import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const linkStyle = {
  marginRight: 15,
  color: 'gray'
};

const Header = () => (
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <style jsx global>{`
      body {
        font-family: 'Arial';
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Header;
