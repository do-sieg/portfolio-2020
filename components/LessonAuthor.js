import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { U_WEBSITE, U_KELPROF, U_VOSCOURS, U_SUPERPROF } from '../config/constants';

export function LessonAuthor({ noBorder, altHeading }) {
    return (
        <div className={"lesson-author " + (noBorder ? " no-border" : "")}>
            <div className="top-block">
                <div className="profile-picture">
                    <img src="/images/profile/profile_01.jpg" alt="profile-pic" />
                </div>

                <div className="author-bio-block">
                    <h2>{altHeading ? altHeading : "À propos de l'auteur"}</h2>
                    <p>Bonjour, je suis Daniel, développeur web et enseignant, passionné par tout ce qui touche au code.</p>
                    <p>
                        Je mets ces cours à disposition des débutants pour les aider à s'y retrouver un peu. C'est le fruit de mes expériences en développement, et tiennent compte des plus récentes mises à jour.
                    </p>
                    <p>Vous pouvez voir mes autres travaux en visitant <a href={U_WEBSITE} target="_blank">mon site</a>.</p>
                </div>
            </div>

            <p className="author-contact-block">
                Je donne également des cours particuliers. Vérifiez mes disponibilités sur les sites suivants ou contactez-moi sur <a href="mailto:d.orchanian@gmail.com">d.orchanian@gmail.com</a>.
                <div className="teach-links">
                    <a href={U_KELPROF} target="_blank">Kelprof <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    <a href={U_SUPERPROF} target="_blank">Superprof <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    <a href={U_VOSCOURS} target="_blank">Voscours <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                </div>
            </p>
        </div>
    );
}