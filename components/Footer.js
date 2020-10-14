import { useContext } from "react";
import { DEV_FULLNAME, U_EMAIL, DEV_EMAIL, U_WEBSITE } from "../config/constants";
import { LangContext, useLang, useLangLink } from "../utils/lang";
import NavLink from "./NavLink";

export default function Footer({ displayEmail = true, displayCredits = true, backlink = false }) {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);
    const langLink = useLangLink(pageLang);

    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    let str = `${startYear} ${currentYear > startYear ? `-${currentYear}` : ''}`;
    return (
        <footer>
            {backlink ?
                <a href={U_WEBSITE} target="_blank"><span>© {str} {DEV_FULLNAME}</span></a>
                :
                <span>© {str} {DEV_FULLNAME}</span>
            }
            {displayEmail && <a href={U_EMAIL}>{DEV_EMAIL}</a>}
            {displayCredits && <NavLink href={langLink("/credits")}>{lang('PHOTO_CREDITS')}</NavLink>}
        </footer>
    )
}