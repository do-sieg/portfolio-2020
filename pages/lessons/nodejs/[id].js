import LessonPage from "../../../components/LessonPage";
import { getAllLessonsIds, getLessonPageProps } from "../../../utils/lessons";

const LESSON_CATEGORY = 'nodejs';

export async function getStaticPaths() {
    const paths = getAllLessonsIds(LESSON_CATEGORY);
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const props = await getLessonPageProps(params.id, LESSON_CATEGORY);
    return { props };
}

export default function Page({ lessonCategory, lessons, lessonData }) {
    return (
        <LessonPage
            lessonCategory={lessonCategory}
            lessons={lessons}
            lessonData={lessonData}
        />
    );
}
