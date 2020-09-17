import SimpleLayout from "../components/SimpleLayout";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLang } from "../utils/Lang";

const Error404 = ({ pageLang = "fr" }) => {
    const lang = useLang(pageLang);

    return (
        <SimpleLayout headTitle="Erreur 404">
            <div className="error-page-container">
                <div className="error-box">
                    <h1>404</h1>
                    <span>{lang('ERR_PAGE_NOT_FOUND')}</span>
                </div>
                <Link href="/">
                    <a>{lang('ACTION_BACK_TO_HOMEPAGE')}</a>
                </Link>
                <Footer pageLang={pageLang} />
            </div>
        </SimpleLayout>
    );
}

export default Error404;