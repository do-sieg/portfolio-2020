import { useState } from 'react';
import bgData from '../public/data/backgrounds.json';


// MOVE
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomBackground = () => {
    const [imgFile, setImgFile] = useState(getRandomPicture());

    function getRandomPicture() {
        return bgData[getRandomInt(0, bgData.length - 1)].path;
    }

    return (
        <div className="random-background" style={{ backgroundImage: "url(../" + imgFile + ")" }} />
    );
}

export default RandomBackground;