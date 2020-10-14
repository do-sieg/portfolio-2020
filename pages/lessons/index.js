import LessonsLayout from "../../components/LessonsLayout";
import { LessonAuthor } from "../../components/LessonAuthor";
import { LSN_HEAD_TITLE_PREFIX } from "../../config/constants";

export default function Lessons() {
    return (
        <LessonsLayout className="lesson-page" headTitle={`${LSN_HEAD_TITLE_PREFIX} - Accueil`}>
            
            <LessonAuthor noBorder altHeading />
            
        </LessonsLayout>
    );
}