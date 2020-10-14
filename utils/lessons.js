import fs from 'fs';
import path from 'path';
import React from 'react';
import { loadMarkdownData, parseMarkdown } from './markdown';
import lessonsDataTree from '../public/data/lessons.json';
import NavLink from '../components/NavLink';

export const TYPE_CODE = 0;
export const TYPE_THEORY = 1;

export const LessonsContext = React.createContext({
    lessons: {},
});

const lessonsDirPath = path.join(process.cwd(), 'markdown/lessons');


export function getAllLessons(typePath) {
    const fileNames = fs.readdirSync(lessonsDirPath + `/${typePath}`);

    const obj = {};

    fileNames.forEach((fileName) => {
        const fullPath = path.join(lessonsDirPath + `/${typePath}`, fileName);
        const data = loadMarkdownData(fullPath);
        const id = fileName.replace(/\.md$/, '');
        if (data.data.title && data.data.type !== undefined) {
            if (data.data.published !== false) {
                obj[id] = {
                    fileName,
                    title: data.data.title,
                    type: data.data.type,
                };
            }
        }
    });

    return obj;
}

export function getAllLessonsIds(typePath) {
    const fileNames = fs.readdirSync(lessonsDirPath + `/${typePath}`);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        };
    });
}

export function loadLessonData(typePath, lessonId) {
    return loadMarkdownData(path.join(lessonsDirPath,typePath, `${lessonId}.md`))
}

export async function getLessonPageProps(lessonId, lessonCategory) {
    const lessons = getAllLessons(lessonCategory);
    const lessonData = loadLessonData(lessonCategory, lessonId);
    lessonData.htmlContent = await parseMarkdown(lessonData.content);
    delete lessonData.orig;
    return { lessonCategory, lessons, lessonData };
}

export function renderLessonPlan(lessonCategory, lessons) {
    return (
        <ul>

            {Object.values(lessonsDataTree[lessonCategory].plan).map((section, index) => {
                return (
                    <React.Fragment key={index}>
                        <li>{section.title}</li>

                        <ol>
                            {Object.entries(section.lessons).map(([index, id]) => {
                                const data = lessons[id];

                                if (data) {

                                    // let typeClassName = "";

                                    // switch (data.type) {
                                    //     case TYPE_CODE: typeClassName = "code"; break;
                                    //     case TYPE_THEORY: typeClassName = "theory"; break;
                                    //     default: break;
                                    // }

                                    return (
                                        <li key={index}>
                                            <NavLink key={index} href={`/lessons/${lessonCategory}/${id}`}>
                                                {data.title}
                                            </NavLink>
                                        </li>
                                    );
                                }
                            })}
                        </ol>

                    </React.Fragment>
                );
            })}
        </ul>
    );
}