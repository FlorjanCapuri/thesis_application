import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="font-font3">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;