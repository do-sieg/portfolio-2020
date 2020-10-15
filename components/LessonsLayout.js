import Head from "./Head";
import LessonsMenu from "./LessonsMenu";
import Footer from "./Footer";
import LessonMenuShortcut from "./LessonMenuShortcut";
import NavLink from "./NavLink";
import { LSN_TITLE, LSN_SUBTITLE } from "../config/constants";
import { useRef } from "react";

export default function LessonsLayout({ children, className, headTitle }) {

    const menuRef = useRef(null);

    function handleScrollToMenu(e) {
        e.preventDefault();
        window.scrollTo(0, menuRef.current.offsetTop);
    }

    function LessonsHeader() {
        return (
            <header className="lesson-header">
                <NavLink href="/lessons">
                    <div className="title-container">
                        <label className="title">{LSN_TITLE}</label>
                        <p className="subtitle">{LSN_SUBTITLE}</p>
                    </div>
                </NavLink>
            </header>
        );
    }

    return (
        <>
            <Head customTitle={headTitle} />
            <LessonsHeader />
            <LessonMenuShortcut onClick={handleScrollToMenu} />
            <div className="lesson-layout-wrapper">
                <div ref={menuRef}>
                    <LessonsMenu />
                </div>
                <main className="lesson-main">
                    <div className="page-container">
                        <div className={"page-wrapper " + (className ? className : "")}>
                            {children}
                        </div>
                    </div>
                    <Footer displayEmail={false} displayCredits={false} backlink />
                </main>
            </div>
        </>
    );
}