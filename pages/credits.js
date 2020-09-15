import Layout from "../components/Layout";
import { DEV_FULLNAME } from "../config/constants";
import bgData from '../public/data/backgrounds.json';

export default function Credits() {
    return (
        <Layout className="credits-page" headTitle={`${DEV_FULLNAME} - Crédits`}>
            {bgData.map((data, index) => {
                return (
                    <div key={index} className="photo-credits-row">
                        <img src={data.path} /><label>{data.author}</label>
                    </div>
                );
            })}
        </Layout>
    )
}
