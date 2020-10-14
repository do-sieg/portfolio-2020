import { useContext } from "react";
import { LessonsContext, TYPE_CODE, TYPE_THEORY } from "../utils/lessons";
import NavLink from "./NavLink";
import lessonsDataTree from '../public/data/lessons.json';

export default function LessonsMenu() {
    const context = useContext(LessonsContext);

    function NumTag({ children, className }) {
        return (
            <div className={"numtag " + (className ? className : "")}>
                <label>{children}</label>
            </div>
        );
    }

    function renderLessonPlan(lessonCategory) {
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