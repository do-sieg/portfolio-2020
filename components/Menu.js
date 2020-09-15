import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';

export const MENU_ROTATION_FIRST_LOAD_ONLY = true;
export const MENU_ROTATION_DURATION = 0.8;
export const MENU_ROTATION_DELAY = 0.5;

export function openMenu() {
    var element = document.getElementById("rotating-menu");
    if (element) {
        element.classList.add("opening");
    }
}

export function closeMenu() {
    var element = document.getElementById("rotating-menu");
    if (element) {
        element.classList.add("closing");
    }
}

const Menu = ({ isOpening }) => {
    return (
        <div className="side-menu-container">
            <div
                id="rotating-menu"
                className={"side-menu-container rotating-menu " + (isOpening || !MENU_ROTATION_FIRST_LOAD_ONLY ? " opening" : "")}
                style={{
                    animationDuration: `${MENU_ROTATION_DURATION}s`,
                    animationDelay: `${MENU_ROTATION_DELAY}s`,
                }}
            >
                <nav>
                    <NavLink href="/"><span>Accueil</span><FontAwesomeIcon icon={faHome} /></NavLink>
                    <NavLink href="/projects"><span>Projets</span><FontAwesomeIcon icon={faProjectDiagram} /></NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
