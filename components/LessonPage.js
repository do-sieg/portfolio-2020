import Error404 from "../pages/404";
import { LessonsContext } from "../utils/lessons";
import LessonsLayout from "./LessonsLayout";
import Prism from "prismjs";
import { useContext, useEffect } from "react";
import { LangContext, langDateFormats } from "../utils/lang";
import { dateToString } from "../utils/date";
import { LessonAuthor } from "./LessonAuthor";
import { LSN_TITLE } from "../config/constants";

export default function LessonPage({ lessonCategory, lessons, lessonData }) {
    const pageLang = useContext(LangContext);

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        lessonData.data.published === false ?
            <Error404 backHref="/lessons" />
            :
            <LessonsContext.Provider value={{ lessonCategory, lessons }}>
                <LessonsLayout className="lesson-page" headTitle={`${LSN_TITLE} - ${lessonData.data.title}`}>
                    <p className="lesson-published-date">Publié le {dateToString(lessonData.data.date, langDateFormats[pageLang])}</p>
                    <span className="markdown" dangerouslySetInnerHTML={{ __html: lessonData.htmlContent }} />
                    <LessonAuthor />
                </LessonsLayout>
            </LessonsContext.Provider>
    );
}