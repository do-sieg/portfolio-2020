import NavLink from "./NavLink";
import { getCleanPath, getLangLink } from "../utils/lang";
import { useRouter } from "next/router";

export default function LangSelector() {
    const { pathname } = useRouter();
    
    return (
        <div className="lang-selector">
            <NavLink className="btn fr" href={getLangLink("fr", getCleanPath(pathname))}>FR</NavLink>
            <NavLink className="btn en" href={getLangLink("en", getCleanPath(pathname))}>EN</NavLink>
        </div>
    );
}