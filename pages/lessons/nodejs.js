import LessonsLayout from "../../components/LessonsLayout";
import { LSN_HEAD_TITLE_PREFIX } from "../../config/constants";
import { getAllLessons, LessonsContext, renderLessonPlan } from "../../utils/lessons";

const LESSON_CATEGORY = 'nodejs';

export async function getStaticProps() {
    return { props: { lessons: getAllLessons(LESSON_CATEGORY) } };
}

export default function NodeLessons({ lessons }) {
    return (
        <LessonsContext.Provider value={{ lessonCategory: LESSON_CATEGORY, lessons }}>
            <LessonsLayout className="lesson-page" headTitle={`${LSN_HEAD_TITLE_PREFIX} - NodeJS`}>

                <h1>Les Cours pour NodeJS</h1>

                <h2>A. Qu'est-ce que NodeJS ? Pourquoi l'utiliser ?</h2>
                <p>Créé par Ryan Dahl en 2009, Node.js est un environnement bas niveau permettant l'exécution de JavaScript côté serveur.</p>
                <p>Il est réputé être <span className="keyword">performant</span>, et il est idéal pour développer des applications en temps réel.</p>
                <p>Le code se comporte de manière <span className="keyword">asynchrone</span> : on n'attend pas qu'une opération se termine avant de lancer la suivante (ce comportement peut être changé pour certaines fonctions synchrones). C'est ce qui rend une application NodeJS plus rapide en moyenne que d'autres systèmes.</p>
                <p>De plus, le simple fait d'utiliser JavaScript permet de ne pas basculer entre plusieurs langages entre les côtés client et serveur.</p>

                <h2>B. À quoi ça ressemble ?</h2>
                <p>Une application NodeJS repose sur des <span className="keyword">dépendances</span> gérées par NPM. Le développeur peut importer des libraires réutilisables. Des milliers de ces modules sont mis à disposition par une communauté très dynamique.</p>

                <h2>C. Comment fonctionnent les cours ?</h2>
                <p>Je crois qu'un cours devrait se différencier :
                    <ul>
                        <li>d'une simple documentation ou d'un manuel de référence</li>
                        <li>d'un bête copier-coller de code</li>
                    </ul>
                </p>

                <p>En conséquence, le cours va consister en la simple <span className="keyword">création d'un projet</span> très basique, qu'on va ensuite améliorer en <span className="keyword">explorant d'autres aspects de l'environnement NodeJS</span>.</p>
                <p>Par exemple, les premiers cours porteront sur le simple routage de l'application, mais les questions de sécurité seront abordées plus loin.</p>
                <p>Certaines leçons du cours sont plus <span className="keyword">théoriques</span>. On y aborde des sujets comme :
                    <ul>
                        <li>les <span className="keyword">bonnes pratiques</span> et les standards du web</li>
                        <li>les questions de <span className="keyword">logique</span> rencontrées au cours du développement backend</li>
                    </ul>
                </p>

                <p className="disclaimer">
                    Attention !
                    <br />
                    Le code fourni dans ces cours est une base de travail. Il n'est pas destiné à être utilisé tel quel dans des projets professionnels.
                    <br />
                    Il appartient à chaque développeur de veiller à la sécurité et au bon fonctionnement de ses applications.
                </p>

                <h2>D. Pour qui sont ces cours?</h2>
                <p>Il est indispensable de savoir <span className="keyword">coder en JavaScript</span> et avoir au moins une fois utilisé <span className="keyword">npm</span>.</p>

                <h2>E. Plan du cours</h2>
                {renderLessonPlan(LESSON_CATEGORY, lessons)}

            </LessonsLayout>
        </LessonsContext.Provider>
    );
}