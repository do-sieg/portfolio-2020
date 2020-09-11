import { useRouter } from "next/router";
import { closeMenu } from "./Menu";

function delayedNavigate(router, url, delay) {
    if (url !== router.pathname) {
        closeMenu();
        setTimeout(() => {
            router.push(url).then(() => window.scrollTo(0, 0));
        }, delay);
    }
}

const NavLink = ({ children, href, className }) => {
    const router = useRouter();
    return (
        <a className={className ? className : ""} onClick={(e) => delayedNavigate(router, href, 1500)}>{children}</a>
    );
}

export default NavLink;