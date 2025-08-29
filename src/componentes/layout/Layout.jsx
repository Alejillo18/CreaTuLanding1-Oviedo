import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";

function Layout({ children, showNavBar }) {
  return (
    <div className={`main-content ${showNavBar ? "blurred" : ""}`}>
      <Header />
      <MainBody>
        {children}
      </MainBody>
      <Footer />
    </div>
  );
}

export default Layout;