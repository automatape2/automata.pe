import { translations, type Locale } from './translations';

export function getLangFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (lang === 'en') return 'en';
    if (lang === 'es') return 'es';
    return 'en';
}

export function getTranslations(locale: Locale) {
    return translations[locale];
}

export function useTranslatedPath(locale: Locale) {
    return function translatePath(path: string) {
        return locale === 'es' ? path : `/${locale}${path}`;
    };
}
