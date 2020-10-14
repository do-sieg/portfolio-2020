import Head from "./Head";
import LessonsMenu from "./LessonsMenu";
import Footer from "./Footer";
import LessonMenuShortcut from "./LessonMenuShortcut";
import NavLink from "./NavLink";
import { LSN_HEAD_TITLE_PREFIX } from "../config/constants";

export default function LessonsLayout({ children, className, headTitle }) {

    function LessonsHeader() {
        return (
            <header className="lesson-header">
                <NavLink href="/lessons">
                    <div className="title-container">
                        <label className="title">{LSN_HEAD_TITLE_PREFIX}</label>
                        <p className="subtitle">Apprendre à coder</p>
                    </div>
                </NavLink>
            </header>
        );
    }

    return (
        <>
            <Head customTitle={headTitle} />
            <LessonsHeader />
            <LessonMenuShortcut />

            <div className="lesson-layout-wrapper">
                <LessonsMenu />
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