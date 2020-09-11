import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';

export function closeMenu() {
    var element = document.getElementById("rotating-menu");
    element.classList.add("closing");
}

const Menu = ({ isOpening }) => {
    return (
        <div className="side-menu-container">
            <div id="rotating-menu" className={"side-menu-container rotating-menu " + (isOpening ? " opening" : "")}>
                <nav>
                    <NavLink href="/"><span>Accueil</span><FontAwesomeIcon icon={faHome} /></NavLink>
                    <NavLink href="/projects"><span>Projets</span><FontAwesomeIcon icon={faProjectDiagram} /></NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
