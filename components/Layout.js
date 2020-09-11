import Head from './Head';
import Header from './Header';
import RandomBackground from './RandomBackground';
import Menu from './Menu';
import Footer from './Footer';
import ContactMeBox from './ContactMeBox';
import { useRouter } from 'next/router';
import { useEffect } from 'react';





const Layout = ({ children, className, headTitle }) => {
    const router = useRouter();
    let isMenuOpening = true

    useEffect(() => {
        setTimeout(() => {
            isMenuOpening = false;
        }, 8000);

        return () => {
            isMenuOpening = false;
        }
    });

    return (
        <>
            

            <Head customTitle={headTitle} />
            <Header />
            <Menu isOpening={isMenuOpening} />
            <ContactMeBox />
            <RandomBackground />

            <main>
                <div className={"page-wrapper " + (className ? className : "")}>
                    {children}
                </div>
                <Footer />
            </main>

        </>
    );
}

export default Layout;