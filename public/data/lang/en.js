import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { DEV_EMAIL, U_EMAIL } from "../../../config/constants";

// Errors
export const ERR_PAGE_NOT_FOUND = "This page doesn't exist";

// Actions
export const ACTION_SUBMIT = "Submit";

// Days
export const DAY_SUNDAY = "Sunday";
export const DAY_MONDAY = "Monday";
export const DAY_TUESDAY = "Tuesday";
export const DAY_WEDNESDAY = "Wednesday";
export const DAY_THURSDAY = "Thursday";
export const DAY_FRIDAY = "Friday";
export const DAY_SATURDAY = "Saturday";

// Header
export const JOB_TITLE = "Web Developer";
export const JOB_LOCATION = "based in France";

// Footer
export const PHOTO_CREDITS = "Photo credits";

// Menu
export const NAV_HOME = "Home";
export const NAV_PROJECTS = "Projects";
export const NAV_CREDITS = "Credits";

// Home Page
export const HOME_WELCOME_TEXT = (
    <>
        <p><span className="keyword">Welcome</span> to my presentation site.</p>
        <p>
            I am interested in projects of all kinds. Whether you are a <span className="keyword">business</span> or an <span className="keyword">individual</span>,
            I put my expertise and my <span className="keyword">skills at your service</span>.
        </p>
        <p>
            I <span className="keyword">support</span> you to carry out your projects, advising you during the process, and working on it until the final steps. Alone or within a team of collaborators, <span className="keyword">I adapt to your needs</span>.
        </p>
        <p>
            Do not hesitate to contact me for any information by clicking on <span className="keyword">the small balloon</span> at the top right ... <span className="up-right-arrow"><FontAwesomeIcon icon={faArrowUp} /></span><br />
        </p>
        <p>
            ... or simply by sending me an email at <a href={U_EMAIL}>{DEV_EMAIL}</a>.
        </p>

        <p>
            Good navigation!
        </p>
    </>
);
export const CHECK_CV = "See my resume";
export const CHECK_LINKEDIN = "Find me on LinkedIn";
export const SKILLS = "Skills";
export const SKILLS_DESC = "I like discovering new tools and learning how to master them.";
export const NEWS = "News";
export const NEWS_DESC = "A summary of my latest works and ongoing projects.";
export const ACTION_SEE_ALL_PROJECTS = "See all my projects";

// Projects Page
export const ACTIVE_PROJECTS = "Ongoing projects";
export const CLIENT_PROJECTS = "Client work";
export const CLIENT_PROJECTS_DESC = "These are only the projects made public by the clients.";
export const ACTION_VISIT = "Visit";
export const ACTION_VISIT_FAKE = "Try";
export const ACTION_DOWNLOAD = "Download";
export const ACTION_TRY = "Try";
export const ACTION_PLAY = "Play";

export const ACTION_BACK = "Back";
export const ACTION_BACK_TO_HOMEPAGE = "Go back to the homepage";

// Feedback Modal
export const FEEDBACK_MODAL_TEXT_LONG = (
    <>
        <h2>Oops ... You are already on this site</h2>
        <p>However, why not use this opportunity to give me your opinion?</p>
        <p>You can join me by email at the following address:</p>
        <a href={U_EMAIL}>{DEV_EMAIL}</a>
    </>
);
export const FEEDBACK_MODAL_TEXT_SHORT = (
    <>
        <h2>You are already on this site</h2>
        <p>Why not use this opportunity to give me your opinion?</p>
        <p>You can join me by email:</p>
        <a href={U_EMAIL}>{DEV_EMAIL}</a>
    </>
);

// Templates Page
export const ERR_EMPTY_PASSWORD = "Password can't be empty";
export const ERR_WRONG_PASSWORD = "You entered the wrong password";