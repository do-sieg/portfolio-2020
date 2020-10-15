import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faCogs, faGraduationCap, faHome, faRocket } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';
import { LangContext, useLang, useLangLink } from '../utils/lang';
import { useContext } from 'react';
import { LSN_TITLE } from '../config/constants';

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
                <nav className="main-menu">
                    <NavLink className="nav-button" href={langLink("/")}><span>{lang('NAV_HOME')}</span><FontAwesomeIcon icon={faHome} /></NavLink>
                    <NavLink className="nav-button" href={langLink("/projects")}><span>{lang('NAV_PROJECTS')}</span><FontAwesomeIcon icon={faRocket} /></NavLink>
                    <NavLink className="nav-button" href={"/lessons"}><span>{LSN_TITLE}</span><FontAwesomeIcon icon={faGraduationCap} /></NavLink>
                    {/* <NavLink href={langLink("/blog")}><span>{lang('NAV_BLOG')}</span><FontAwesomeIcon icon={faGraduationCap} /></NavLink> */}
                </nav>
            </div>
        </div>
    );
}

export default Menu;
