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

            <section className="client-projects">
                <h2>Réalisations clientèle</h2>
                <p>N'apparaissent ici que les projets publiés par les clients</p>
                <ProjectGallery category="customer" list={projects_data} />
            </section>

        </Layout>
    )
}
