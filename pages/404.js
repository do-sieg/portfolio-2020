import SimpleLayout from "../components/SimpleLayout";
import Footer from "../components/Footer";
import Link from "next/link";
import { LangContext, useLang } from "../utils/Lang";
import { useContext } from "react";

const Error404 = () => {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);

    return (
        <SimpleLayout className="error-page" headTitle="Erreur 404">
            <div className="error-box">
                <h1>404</h1>
                <span>{lang('ERR_PAGE_NOT_FOUND')}</span>
            </div>
            <Link href="/">
                <a>{lang('ACTION_BACK_TO_HOMEPAGE')}</a>
            </Link>
        </SimpleLayout>
    );
}

export default Error404;