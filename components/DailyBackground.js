import { useState } from 'react';
import bgData from '../public/data/backgrounds.json';

const DailyBackground = () => {
    const [imgFile, setImgFile] = useState(getTodayPicture());

    function getTodayPicture() {
        return bgData[new Date().getDay()].path;
    }

    return (
        <div className="daily-background" style={{ backgroundImage: "url(.." + imgFile + ")" }} />
    );
}

export default DailyBackground;