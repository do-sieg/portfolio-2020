import Layout from "../components/Layout";
import projects_data from '../public/data/projects.json';
import { ProjectGallery } from "../components/ProjectGallery";
import { DEV_FULLNAME } from "../config/constants";

export default function Home() {
    return (
        <Layout className="projects-page" headTitle={`${DEV_FULLNAME} - Projets`}>

            <section>
                <h2>Projets actifs</h2>
                <ProjectGallery category="personal" list={projects_data} />
            </section>

            <section>
                <h2>Réalisations clientèle</h2>
                <ProjectGallery category="customer" list={projects_data} />
            </section>

        </Layout>
    )
}
