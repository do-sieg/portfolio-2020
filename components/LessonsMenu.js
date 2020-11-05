import { useContext, useState } from "react";
import { LessonsContext, TYPE_CODE, TYPE_THEORY } from "../utils/lessons";
import NavLink from "./NavLink";
import lessonsDataTree from '../public/data/lessons.json';
import { LSN_MOST_RECENT_PERIOD } from "../config/constants";

export default function LessonsMenu() {
    const context = useContext(LessonsContext);
    let [mostRecentDate, setMostRecentDate] = useState(null);

    function NumTag({ children, className }) {
        return (
            <div className={"numtag " + (className ? className : "")}>
                <label>{children}</label>
            </div>
        );
    }

    function renderLessonPlan(lessonCategory) {
        // let mostRecentDate;
        const todayDate = new Date(Date.now());
        return (
            <>
                {Object.values(lessonsDataTree[lessonCategory].plan).map((section, index) => {


                    return (
                        <React.Fragment key={index}>

                            <div key={index} className="lesson-nav-header">
                                <NumTag className="section">P{index + 1}</NumTag>
                                <span>{section.title}</span>
                            </div>

                            {Object.entries(section.lessons).map(([lessonIndex, id]) => {
                                const data = context.lessons[id];

                                if (!mostRecentDate || new Date(data.date) > new Date(mostRecentDate)) {
                                    mostRecentDate = data.date;
                                    setMostRecentDate(data.date);
                                }
                                
                                const daysDiff = Math.round((new Date(todayDate) - new Date(data.date)) / (1000*60*60*24));
                                const isRecent = daysDiff <= LSN_MOST_RECENT_PERIOD || data.date === mostRecentDate;

                                if (data) {

                                    let typeClassName = "";

                                    switch (data.type) {
                                        case TYPE_CODE: typeClassName = "code"; break;
                                        case TYPE_THEORY: typeClassName = "theory"; break;
                                        default: break;
                                    }

                                    return (
                                        // <NavLink key={lessonIndex} href={`/lessons/${id}`}>
                                        <NavLink className="nav-button" key={lessonIndex} href={`/lessons/${lessonCategory}/${id}`}>
                                            {isRecent && <div className="new-tag">NEW</div>}
                                            <NumTag className={"lesson " + typeClassName}>{parseInt(lessonIndex, 10) + 1}</NumTag>
                                            <span>{data.title}</span>
                                        </NavLink>
                                    );
                                }
                            })}

                        </React.Fragment>
                    );
                })}
            </>
        );
    }

    return (
        <nav id="menu" className="lesson-nav">
            <NavLink className="nav-button" href="/lessons">
                <NumTag>A</NumTag><span>Accueil</span>
            </NavLink>

            {context.lessonCategory ?
                <>
                    <NavLink className="nav-button" href={`/lessons/${context.lessonCategory}`}>
                        <NumTag>{lessonsDataTree[context.lessonCategory].letter}</NumTag>
                        <span>{lessonsDataTree[context.lessonCategory].name}</span>
                    </NavLink>

                    {renderLessonPlan(context.lessonCategory)}
                </>
                :
                <>
                    {Object.entries(lessonsDataTree).map(([key, data], index) => {
                        return (
                            <NavLink className="nav-button" key={index} href={`/lessons/${key}`}>
                                <NumTag>{data.letter}</NumTag>
                                <span>{data.name}</span>
                            </NavLink>
                        );
                    })}
                </>
            }
        </nav >
    );
}