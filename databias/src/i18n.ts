// src/i18n.ts (avec chargement distant)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Le chargeur JSON

i18n
    .use(Backend) // Active le chargement des fichiers
    .use(initReactI18next)
    .init({
        // Remplace la clé 'resources'
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        lng: "en",
        fallbackLng: "fr",
        ns: "translation", // L'espace de nom par défaut
        defaultNS: "translation",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false // Simplifie le démarrage pour l'exemple
        }
    });

export default i18n;