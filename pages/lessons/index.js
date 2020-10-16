import LessonsLayout from "../../components/LessonsLayout";
import { LessonAuthor } from "../../components/LessonAuthor";
import { LSN_TITLE, LSN_SUBTITLE } from "../../config/constants";

export default function Lessons() {
    return (
        <LessonsLayout className="lesson-page" headTitle={`${LSN_TITLE} - ${LSN_SUBTITLE}`}>
            <LessonAuthor noBorder altHeading={`Bienvenue sur ${LSN_TITLE}`} />
        </LessonsLayout>
    );
}