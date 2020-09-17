import Layout from "../components/Layout";
import { DEV_FULLNAME } from "../config/constants";
import bgData from '../public/data/backgrounds.json';

export default function Credits() {
    const days = [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];

    return (
        <Layout className="credits-page" headTitle={`${DEV_FULLNAME} - Crédits`}>
            {[1, 2, 3, 4, 5, 6, 0].map((index) => {
                const data = bgData[index];
                return (
                    <div key={index} className="photo-credits-row">
                        <img src={data.path} /><label>[{days[index]}] {data.author}</label>
                    </div>
                );
            })}
        </Layout>
    )
}
