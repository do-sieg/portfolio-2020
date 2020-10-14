import FeedbackModal from './FeedbackModal';
import { useContext, useState } from 'react';
import { LangContext, useLang } from '../utils/lang';

export function ProjectGallery({ category, list }) {
    const [hoverIndex, setHoverIndex] = useState();
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);

    function renderProjectLink(data) {
        let href;
        let text;

        function checkUrlType(type) {
            const texts = {
                url_visit: lang('ACTION_VISIT'),
                url_visit_fake: lang('ACTION_VISIT_FAKE'),
                url_download: lang('ACTION_DOWNLOAD'),
                url_try: lang('ACTION_TRY'),
                url_play: lang('ACTION_PLAY'),
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

    let items = Object.values(list);
    if (category) {
        items = items.filter(data => data.type === category);
    }
    items = items.filter(data => data.draft !== true);

    return (
        <div className="project-gallery">
            {items.map((data, index) => {
                return (
                    <div
                        key={index}
                        className={"preview-box " + (hoverIndex == index ? "hovered" : "")}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onBlur={() => setHoverIndex(null)}
                    >
                        <div className="top">
                            {data.image &&
                                <>
                                    <img src={data.image} alt={data.name} />
                                    <img className="second-img" src={data.image_hover} alt={data.name} />
                                </>
                            }
                            {data.tech &&
                                <div className="tech-tag">{data.tech}</div>
                            }
                        </div>
                        <div className="bottom">
                            <h3>{data.name}</h3>
                            <p>{data.desc[pageLang]}</p>
                            {renderProjectLink(data)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


