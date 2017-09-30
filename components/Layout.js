import Header from "./Header";

const layoutStyle = {
  maxWidth: 800,
  margin: 'auto'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;