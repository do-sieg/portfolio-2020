import Head from './Head';
import Header from './Header';
import DailyBackground from './DailyBackground';
import Menu, { MENU_ROTATION_ACTIVE } from './Menu';
import Footer from './Footer';
import ContactMeBox from './ContactMeBox';
import { useEffect } from 'react';

const Layout = ({ children, className, headTitle, pageLang = "fr" }) => {
    let isMenuOpening = MENU_ROTATION_ACTIVE;

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
            <Header pageLang={pageLang} />
            <Menu pageLang={pageLang} isOpening={isMenuOpening} />
            <ContactMeBox />
            <DailyBackground />

            <main>
                <div className="page-container">
                    <div className={"page-wrapper " + (className ? className : "")}>
                        {children}
                    </div>
                </div>
                <Footer pageLang={pageLang} />
            </main>
        </>
    );
}

export default Layout;