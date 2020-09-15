import { DEV_FULLNAME } from "../config/constants";

const Header = () => (
    <header>
        <div className="profile-picture">
            <img src="../images/profile/profile_02.jpg" />
        </div>
        <div className="profile-description">
            <h1>{DEV_FULLNAME}</h1>
            <p>Développeur Web<span className="extended"> basé à Valence</span></p>
        </div>
    </header>
);

export default Header;
