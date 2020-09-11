import NextHead from 'next/head';
import { DEV_FULLNAME } from '../config/constants';

const Head = ({ customTitle = DEV_FULLNAME }) => (
    <NextHead>
        <title>{customTitle}</title>
        <link rel="icon" href="/favicon.png" />
        {/* <link href="/styles/globals.css" rel="stylesheet"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Kufam:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
    </NextHead>
);

export default Head;