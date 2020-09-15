import Layout from "../components/Layout";
// import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faLess, faJsSquare, faNodeJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';
import { ProjectGallery } from "../components/ProjectGallery";
// import projectsData from '../public/data/projects.json';
import featuredData from '../public/data/featured.json';
import NavLink from "../components/NavLink";
import { DEV_EMAIL, U_EMAIL, U_LINKEDIN, U_CV, DEV_FULLNAME } from "../config/constants";
import localIcons from "../assets/icons";

function loadData(collectionName) {
  try {
    const data = require('../public/data/' + collectionName + '.json');
    return data;
  } catch (err) {
    console.error(`Error: couldn't load data file ${collectionName}.json`);
    return [];
  }
}

function selectFeatured(type) {
  const featList = featuredData[type];
  const objList = {};
  featList.forEach(element => {
    const data = loadData(element.collection);
    if (data) {
      if (data[element.id]) {
        objList[`${element.collection}_${element.id}`] = data[element.id];
      } else {
        console.error(`Error: can't get item of id '${element.id}' from '${element.collection}.json'`);
      }
    } else {
      console.error(`Error: can't get featured items from a non-existent list`);
    }
  });
  return objList;
}




export default function Home() {

  function renderSkill(icon, text) {
    return (
      <div className="skill-item">
        {typeof icon === 'string' ?
          // <img src={`../images/icons/${icon}.svg`} />
          localIcons[icon]
          : <FontAwesomeIcon icon={icon} />
        }
        <label>{text}</label>
      </div>

    );
  }

  return (
    <Layout className="home-page" headTitle={`${DEV_FULLNAME} - Accueil`}>

      <section>
        <p><span className="keyword">Bienvenue</span> sur mon site de présentation.</p>

        <p>
          {/* A QUI */}
          Je m'intéresse aux projets de toute sorte. Que vous soyiez une <span className="keyword">entreprise</span> ou un <span className="keyword">particulier</span>,
          je mets mon expertise et mes compétences <span className="keyword">à votre service</span>.
        </p>
        {/* ROLES */}{/* TYPES DE TRAVAIL */}
        <p>
          Je vous <span className="keyword">accompagne</span> pour mener à bien vos projets, vous conseillant en amont, puis en menant le développement jusqu'au déploiement. Seul ou au sein d'une équipe de collaborateurs, <span className="keyword">je m'adapte à vos besoins</span>.
        </p>
        <p>
          N'hésitez pas à me contacter pour tout renseignement en cliquant sur <span className="keyword">la petite bulle</span> en haut à droite... <span className="up-right-arrow"><FontAwesomeIcon icon={faArrowUp} /></span><br />
        </p>
        <p>
          ... ou tout simplement en m'écrivant un email à <a href={U_EMAIL}>{DEV_EMAIL}</a>.
        </p>

        <p>
          Bonne navigation !
      </p>
      </section>

      <hr />

      <section id="work-links">
        <a href={U_CV} target="_blank">Consulter mon CV</a>
        <a href={U_LINKEDIN} target="_blank">Voir mon profil LinkedIn</a>
      </section>

      <hr />

      <section>
        <h2>Compétences</h2>
        <p className="skills-desc">
          J'aime découvrir de nouveaux outils et apprendre à les maîtriser.
        </p>
        <div className="skill-box">
          {renderSkill(faHtml5, 'HTML5')}
          {renderSkill(faCss3Alt, 'CSS3')}
          {renderSkill(faLess, 'LESS')}
          {renderSkill('responsive', 'Responsive')}

          {renderSkill(faJsSquare, 'Javascript')}
          {renderSkill(faReact, 'ReactJS')}
          {renderSkill(faNodeJs, 'NodeJS')}
          {renderSkill('nextjs', 'NextJS')}

          {renderSkill(faPhp, 'PHP')}
          {renderSkill('ruby', 'Ruby')}
          {renderSkill(faDatabase, 'SQL')}
          {renderSkill('godotEngine', 'Godot')}
        </div>


      </section>

      <hr />

      <section id="news">
        <h2>Actualités</h2>
        <p className="news-desc">
          Un résumé de mes dernières réalisations et des projets en cours.
        </p>
        <ProjectGallery list={selectFeatured('home')} />

        <NavLink className="btn btn-blue see-more-btn" href="/projects" onClickCb={() => { }}>Voir tous les projets</NavLink>

      </section>

      {/* Liste de clients */}

      {/* Retours clients */}

    </Layout>
  )
}
