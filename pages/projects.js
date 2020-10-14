import Layout from "../components/Layout";
import projects_data from '../public/data/projects.json';
import { ProjectGallery } from "../components/ProjectGallery";
import { DEV_FULLNAME } from "../config/constants";
import { LangContext, useLang } from "../utils/lang";
import { useContext } from "react";

export default function Projects() {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);

    return (
        <Layout className="projects-page" headTitle={`${DEV_FULLNAME} - ${lang('NAV_PROJECTS')}`}>

            <section>
                <h2>{lang('ACTIVE_PROJECTS')}</h2>
                <ProjectGallery category="personal" list={projects_data} />
            </section>

            <section className="client-projects">
                <h2>{lang('CLIENT_PROJECTS')}</h2>
                <p>{lang('CLIENT_PROJECTS_DESC')}</p>
                <ProjectGallery category="customer" list={projects_data} />
            </section>

        </Layout>
    )
}
