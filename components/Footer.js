import { DEV_FULLNAME, U_EMAIL, DEV_EMAIL } from "../config/constants";
import { useLang, useLangLink } from "../utils/Lang";
import NavLink from "./NavLink";

const Footer = ({ pageLang }) => {
    const lang = useLang(pageLang);
    const langLink = useLangLink(pageLang);

    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    let str = `${startYear} ${currentYear > startYear ? `-${currentYear}` : ''}`;
    return (
        <footer>
            <span>© {str} {DEV_FULLNAME}</span>
            <a href={U_EMAIL}>{DEV_EMAIL}</a>
            <NavLink href={langLink("/credits")}>{lang('PHOTO_CREDITS')}</NavLink>
        </footer>
    )
}

export default Footer;