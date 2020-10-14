import { useContext } from "react";
import Layout from "../components/Layout";
import { DEV_FULLNAME } from "../config/constants";
// import bgData from '../public/data/backgrounds.json';
import { LangContext, useLang } from "../utils/lang";

export default function Blog() {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);

    return (
        <Layout className="blog-page" headTitle={`${DEV_FULLNAME} - ${lang('NAV_BLOG')}`}>
            TEST
        </Layout>
    )
}