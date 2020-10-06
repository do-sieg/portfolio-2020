import Head from "./Head";
import Footer from "./Footer";

const SimpleLayout = ({ children, className, headTitle }) => {
    return (
        <>
            <Head customTitle={headTitle} />
            <div className="simple-page-container">
                <div className={"inner-flex-container " + (className ? className : "")}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SimpleLayout;