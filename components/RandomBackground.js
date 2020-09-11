import { useState } from 'react';

const images = [
    "images/backgrounds/kace-rodriguez.jpg",
    "images/backgrounds/james-donaldson.jpg",
    "images/backgrounds/matthew-henry.jpg",
    "images/backgrounds/nattu-adnan.jpg",
    "images/backgrounds/samsommer.jpg",
]

// MOVE
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomBackground = () => {
    const [imgFile, setImgFile] = useState(getRandomPicture());

    function getRandomPicture() {
        return images[getRandomInt(0, images.length - 1)];
    }

    return (
        <div className="random-background" style={{ backgroundImage: "url(../" + imgFile + ")" }} />
    );
}

export default RandomBackground;