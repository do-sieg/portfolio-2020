import { useContext } from "react";
import Layout from "../components/Layout";
import { DEV_FULLNAME } from "../config/constants";
import bgData from '../public/data/backgrounds.json';
import { LangContext, useLang } from "../utils/Lang";

export default function Credits() {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);
    const days = [
        lang('DAY_SUNDAY'),
        lang('DAY_MONDAY'),
        lang('DAY_TUESDAY'),
        lang('DAY_WEDNESDAY'),
        lang('DAY_THURSDAY'),
        lang('DAY_FRIDAY'),
        lang('DAY_SATURDAY'),
    ];

    return (
        <Layout className="credits-page" headTitle={`${DEV_FULLNAME} - ${lang('NAV_CREDITS')}`}>
            {[1, 2, 3, 4, 5, 6, 0].map((index) => {
                const data = bgData[index];
                return (
                    <div key={index} className="photo-credits-row">
                        <img src={data.path} alt={days[index]} /><label>[{days[index]}] {data.author}</label>
                    </div>
                );
            })}
        </Layout>
    )
}
