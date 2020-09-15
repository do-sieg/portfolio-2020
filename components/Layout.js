import Head from './Head';
import Header from './Header';
import RandomBackground from './RandomBackground';
import Menu, { MENU_ROTATION_FIRST_LOAD_ONLY } from './Menu';
import Footer from './Footer';
import ContactMeBox from './ContactMeBox';
import { useEffect } from 'react';

const Layout = ({ children, className, headTitle }) => {
    let isMenuOpening = !MENU_ROTATION_FIRST_LOAD_ONLY;

    useEffect(() => {
        setTimeout(() => {
            isMenuOpening = false;
        }, 500);

        return () => {
            isMenuOpening = false;
        }
    }, []);

    return (
        <>
            <Head customTitle={headTitle} />
            <Header />
            <Menu isOpening={isMenuOpening} />
            <ContactMeBox />
            <RandomBackground />

            <main>
                <div className="page-container">
                    <div className={"page-wrapper opening " + (className ? className : "")}>
                        {children}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Layout;