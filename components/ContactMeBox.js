import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { U_EMAIL, U_FACEBOOK, U_GITHUB, U_LINKEDIN } from "../config/constants";


const contact_links = {
    facebook: {
        icon: faFacebookSquare,
        url: U_FACEBOOK,
    },
    github: {
        icon: faGithubSquare,
        url: U_GITHUB,
    },
    linkedin: {
        icon: faLinkedin,
        url: U_LINKEDIN,
    },
    mail: {
        icon: faEnvelopeSquare,
        url: U_EMAIL,
    },
}

const ContactMeBox = () => {
    const [expanded, setExpanded] = useState(false);

    function getAngleStyle(degrees) {
        return { transform: `rotate(${degrees}deg) translate(3.5em) rotate(-${degrees}deg)` };
    }

    function renderLink(data, degrees) {
        return (
            <a href={data.url} target="_blank" onClick={handleLinkClick} style={getAngleStyle(degrees)}>
                <FontAwesomeIcon icon={data.icon} />
            </a>
        );
    }

    function handleLinkClick() {
        if (!expanded) {
            e.preventDefault();
        }
    }

    function handleClick() {
        setExpanded(!expanded)
    }

    // function handleMouseEnter(e) {
    //     setTimeout(() => {
    //         setExpanded(true);
    //     }, 500);
    // }

    function handleMouseLeave() {
        setExpanded(false)
    }

    function getIconAngle(index) {
        const startingAngle = 230;
        const step = -65;

        return (startingAngle % 360 + step * index) % 360;
    }

    return (
        <div
            className={"contact-me-box" + (expanded ? " expanded" : "")}
            onClick={handleClick}
            // onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className={"btn btn-green trigger-btn" + (expanded ? "" : " bouncing")}>
                <FontAwesomeIcon icon={faComments} />
            </button>

            <div className={"link-icons" + (expanded ? " displayed" : "")}>
                {/* {renderLink(contact_links.facebook, 225 - 15)}
                {renderLink(contact_links.github, 135)}
                {renderLink(contact_links.linkedin, 45 + 15)} */}
                {renderLink(contact_links.facebook, getIconAngle(0))}
                {renderLink(contact_links.github, getIconAngle(1))}
                {renderLink(contact_links.linkedin, getIconAngle(2))}
                {renderLink(contact_links.mail, getIconAngle(3))}
            </div>
        </div>
    );
}

export default ContactMeBox;