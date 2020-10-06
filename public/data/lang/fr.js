import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { DEV_EMAIL, U_EMAIL } from "../../../config/constants";

// Errors
export const ERR_PAGE_NOT_FOUND = "Page introuvable";

// Actions
export const ACTION_SUBMIT = "Envoyer";

// Days
export const DAY_SUNDAY = "Dimanche";
export const DAY_MONDAY = "Lundi";
export const DAY_TUESDAY = "Mardi";
export const DAY_WEDNESDAY = "Mercredi";
export const DAY_THURSDAY = "Jeudi";
export const DAY_FRIDAY = "Vendredi";
export const DAY_SATURDAY = "Samedi";

// Header
export const JOB_TITLE = "Développeur Web";
export const JOB_LOCATION = "basé à Valence";

// Footer
export const PHOTO_CREDITS = "Crédits photo";

// Menu
export const NAV_HOME = "Accueil";
export const NAV_PROJECTS = "Projets";
export const NAV_CREDITS = "Crédits";

// Home Page
export const HOME_WELCOME_TEXT = (
    <>
        <p><span className="keyword">Bienvenue</span> sur mon site de présentation.</p>
        <p>
            Je m'intéresse aux projets de toute sorte. Que vous soyiez une <span className="keyword">entreprise</span> ou un <span className="keyword">particulier</span>,
            je mets mon expertise et mes compétences <span className="keyword">à votre service</span>.
        </p>
        <p>
            Je vous <span className="keyword">accompagne</span> pour mener à bien vos projets, vous conseillant en amont, puis en menant le développement jusqu'au déploiement. Seul ou au sein d'une équipe de collaborateurs, <span className="keyword">je m'adapte à vos besoins</span>.
        </p>
        <p>
            N'hésitez pas à me contacter pour tout renseignement en cliquant sur <span className="keyword">la petite bulle</span> en haut à droite... <span className="up-right-arrow"><FontAwesomeIcon icon={faArrowUp} /></span><br />
        </p>
        <p>
            ... ou tout simplement en m'écrivant un email à <a href={U_EMAIL}>{DEV_EMAIL}</a>.
        </p>

        <p>
            Bonne navigation !
        </p>
    </>
);
export const CHECK_CV = "Consulter mon CV";
export const CHECK_LINKEDIN = "Voir mon profil LinkedIn";
export const SKILLS = "Compétences";
export const SKILLS_DESC = "J'aime découvrir de nouveaux outils et apprendre à les maîtriser.";
export const NEWS = "Actualités";
export const NEWS_DESC = "Un résumé de mes dernières réalisations et des projets en cours.";
export const ACTION_SEE_ALL_PROJECTS = "Voir tous les projets";

// Projects Page
export const ACTIVE_PROJECTS = "Projets actifs";
export const CLIENT_PROJECTS = "Réalisations clientèle";
export const CLIENT_PROJECTS_DESC = "N'apparaissent ici que les projets publiés par les clients.";
export const ACTION_VISIT = "Visiter";
export const ACTION_VISIT_FAKE = "Essayer";
export const ACTION_DOWNLOAD = "Télécharger";
export const ACTION_TRY = "Essayer";
export const ACTION_PLAY = "Jouer";

export const ACTION_BACK = "Retour";
export const ACTION_BACK_TO_HOMEPAGE = "Retourner à la page d'accueil";

// Feedback Modal
export const FEEDBACK_MODAL_TEXT_LONG = (
    <>
        <h2>Oups... Vous êtes déjà sur ce site</h2>
        <p>Cependant, pourquoi ne pas utiliser cette opportunité pour me donner votre avis ?</p>
        <p>Vous pouvez me joindre par mail à l'adresse suivante :</p>
        <a href={U_EMAIL}>{DEV_EMAIL}</a>
    </>
);
export const FEEDBACK_MODAL_TEXT_SHORT = (
    <>
        <h2>Vous êtes déjà sur ce site</h2>
        <p>Pourquoi ne pas utiliser cette opportunité pour me donner votre avis ?</p>
        <p>Vous pouvez me joindre par mail :</p>
        <a href={U_EMAIL}>{DEV_EMAIL}</a>
    </>
);

// Templates Page
export const ERR_EMPTY_PASSWORD = "Le mot de passe est vide";
export const ERR_WRONG_PASSWORD = "Vous avez entré le mauvais mot de passe";