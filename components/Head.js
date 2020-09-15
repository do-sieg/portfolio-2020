import NextHead from 'next/head';
import { DEV_FULLNAME, T_OG_DESC } from '../config/constants';
import { useEffect, useState } from 'react';

function getUrlBase() {
    return window.location.protocol + '//' + window.location.host + '/';
}

const Head = ({ customTitle = DEV_FULLNAME }) => {
    const [ogImageUrl, setOgImageUrl] = useState();

    useEffect(() => {
        setOgImageUrl(getUrlBase() + 'favicon.png');
    }, []);

    return (
        <NextHead>
            <title>{customTitle}</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={T_OG_DESC} />
            <meta name="og:title" content={customTitle} />
            <meta name="og:description" content={T_OG_DESC} />
            <meta name="og:image" content={ogImageUrl} />
            {/* <link href="/styles/globals.css" rel="stylesheet"></link> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Kufam:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        </NextHead>
    )
};

export default Head;