import NavLink from "./NavLink";
import { DEV_FULLNAME } from "../config/constants";
import { LangContext, useLang, useLangLink } from "../utils/lang";
import { useContext } from "react";

const Header = () => {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);
    const langLink = useLangLink(pageLang);

    return (
        <header className="main-header">
            <NavLink href={langLink("/")}>
                <div className="profile-picture">
                    <img src="../images/profile/profile_02.jpg" alt="profile-pic" />
                </div>
            </NavLink>
            <div className="title-container">
                <NavLink href={langLink("/")}>
                    <h1>{DEV_FULLNAME}</h1>
                    <p>{lang('JOB_TITLE')}<span className="extended"> {lang('JOB_LOCATION')}</span></p>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
