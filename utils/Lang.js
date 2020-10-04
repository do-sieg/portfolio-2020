import React from 'react';

const langs = ["fr", "en"];

export const LangContext = React.createContext({
    fr: 'fr',
    en: 'en',
});

export function useLang(lang) {
    return (field) => getLangText(lang, field);
}

export function useLangLink(lang) {
    return (url) => getLangLink(lang, url);
}

export function getLangLink(lang, url) {
    let prefix = '';
    if (langs.includes(lang)) {
        if (lang != langs[0]) {
            prefix = `/${lang}`;
        }
    }
    return prefix + url;
}

export function getLangText(lang, field) {
    // Check if the language is recognized
    if (!langs.includes(lang)) {
        console.error(`Lang: '${lang}' is not an accepted language.`);
        return "";
    }
    let langData = require(`../public/data/lang/${lang}`);
    if (langData[field] == undefined) {
        if (lang !== langs[0]) {
            // Fallback if the field doesn't exist in the target language
            return getLangText(langs[0], field);
        } else {
            console.error(`Lang: fallback failed for non-existing field '${field}'.`);
            return "";
        }
    }
    return langData[field];
}

export function getLangFromPath(pathname) {
    let lang = "fr";
    if (pathname.startsWith("/en/") || pathname === ("/en")) { lang = "en" }
    return lang;
}

export function getCleanPath(pathname) {
    let str = pathname;
    langs.forEach((lang) => {
        if (pathname.startsWith(`/${lang}/`)) {
            str = pathname.substring(`/${lang}`.length);
        } else if (pathname === (`/${lang}`)) {
            str = "/";
        }
    });
    return str;
}