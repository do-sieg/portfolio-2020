import { DEV_FULLNAME, U_EMAIL, DEV_EMAIL } from "../config/constants";
import NavLink from "./NavLink";

const Footer = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    let str = `${startYear} ${currentYear > startYear ? `-${currentYear}` : ''}`;
    return (
        <footer>
            <span>© {str} {DEV_FULLNAME}</span>
            <a href={U_EMAIL}>{DEV_EMAIL}</a>
            <NavLink href="/credits">Crédits photo</NavLink>
        </footer>
    )
}

export default Footer;