import NavLink from "./NavLink";
import { DEV_FULLNAME } from "../config/constants";
import { getCleanPath, getLangLink, useLang, useLangLink } from "../utils/Lang";
import { useRouter } from "next/router";

const Header = ({ pageLang }) => {
    const { pathname } = useRouter();
    const lang = useLang(pageLang);
    const langLink = useLangLink(pageLang);

    return (
        <>
            <header>
                <NavLink href={langLink("/")}>
                    <div className="profile-picture">
                        <img src="../images/profile/profile_02.jpg" />
                    </div>
                </NavLink>
                <div className="profile-description">
                    <NavLink href={langLink("/")}>
                        <h1>{DEV_FULLNAME}</h1>
                        <p>{lang('JOB_TITLE')}<span className="extended"> {lang('JOB_LOCATION')}</span></p>
                    </NavLink>
                </div>

            </header>
            <div className="lang-selector">
                <NavLink className="btn fr" href={getLangLink("fr", getCleanPath(pathname))}>FR</NavLink>
                <NavLink className="btn en" href={getLangLink("en", getCleanPath(pathname))}>EN</NavLink>
            </div>
        </>
    );
}

export default Header;
