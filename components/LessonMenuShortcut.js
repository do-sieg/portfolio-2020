import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function LessonMenuShortcut({ onClick }) {
    return (
        <button className="lesson-menu-shortcut btn" onClick={onClick ? onClick : () => {}}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}