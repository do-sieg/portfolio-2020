import FeedbackModal from './FeedbackModal';
import { useState } from 'react';

export function ProjectGallery({ category, list }) {
    const [hoverIndex, setHoverIndex] = useState();

    function renderProjectLink(data) {
        let href;
        let text;

        function checkUrlType(type) {
            const texts = {
                url_visit: "Visiter",
                url_visit_fake: "Essayer",
                url_download: "Télécharger",
                url_try: "Essayer",
                url_play: "Jouer",
            };
            if (data.hasOwnProperty(type)) {
                href = data[type];
                text = texts[type];
            }
        }

        checkUrlType('url_visit');
        checkUrlType('url_visit_fake');
        checkUrlType('url_download');
        checkUrlType('url_try');
        checkUrlType('url_play');

        return (
            data['url_visit_fake'] ?
                <FeedbackModal><button className="btn btn-blue">{text}</button></FeedbackModal>
                :
                href ? <a className="btn btn-green" href={href} target="_blank">{text}</a> : ""
        );
    }

    let items = Object.values(list)
    if (category) {
        items = items.filter(data => data.type === category)
    }

    return (
        <div className="project-gallery">
            {items.map((data, index) => {
                // let realIndex = data.type + '_' + index;
                return (
                    <div
                        key={index}
                        className={"preview-box " + (hoverIndex == index ? "hovered" : "")}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onBlur={() => setHoverIndex(null)}
                    >
                        <div className="top">
                            <img src={data.image} />
                            <img className="second-img" src={data.image_hover} />
                        </div>
                        <div className="bottom">
                            <h3>{data.name}</h3>
                            <p>{data.desc}</p>
                            {renderProjectLink(data)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


