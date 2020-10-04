import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';
import { LangContext, useLang, useLangLink } from '../utils/Lang';
import { useContext } from 'react';

export const MENU_ROTATION_ACTIVE = false;
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
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);
    const langLink = useLangLink(pageLang);

    return (
        <div className="side-menu-container">
            <div
                id="rotating-menu"
                className={"side-menu-container rotating-menu " + (isOpening ? " opening" : "")}
                style={{
                    animationDuration: `${MENU_ROTATION_DURATION}s`,
                    animationDelay: `${MENU_ROTATION_DELAY}s`,
                }}
            >
                <nav>
                    <NavLink href={langLink("/")}><span>{lang('NAV_HOME')}</span><FontAwesomeIcon icon={faHome} /></NavLink>
                    <NavLink href={langLink("/projects")}><span>{lang('NAV_PROJECTS')}</span><FontAwesomeIcon icon={faBriefcase} /></NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
