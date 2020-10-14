import SimpleLayout from "../components/SimpleLayout";
import Footer from "../components/Footer";
import Link from "next/link";
import { LangContext, useLang } from "../utils/lang";
import { useContext } from "react";

export default function Error404({ backHref = "/" }) {
    const pageLang = useContext(LangContext);
    const lang = useLang(pageLang);

    return (
        <SimpleLayout className="error-page" headTitle="Erreur 404">
            <div className="error-box">
                <h1>404</h1>
                <span>{lang('ERR_PAGE_NOT_FOUND')}</span>
            </div>
            <Link href={backHref}>
                <a>{backHref === '/' ? lang('ACTION_BACK_TO_HOMEPAGE') : lang('ACTION_BACK')}</a>
            </Link>
            <Footer />
        </SimpleLayout>
    );
}
