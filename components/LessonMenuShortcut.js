import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function LessonMenuShortcut() {
    return (
        <button className="lesson-menu-shortcut btn" onClick={() => location.hash = "#menu"}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}