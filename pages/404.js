import SimpleLayout from "../components/SimpleLayout";
import Footer from "../components/Footer";
import Link from "next/link";

const Error404 = () => {

    return (
        <SimpleLayout headTitle="Erreur 404">
            <div className="error-page-container">
                <div className="error-box">
                    <h1>404</h1>
                    <span>Page introuvable</span>
                </div>
                <Link href="/">
                    <a>Retourner à la page d'accueil</a>
                </Link>
                <Footer />
            </div>
        </SimpleLayout>
    );
}

export default Error404;