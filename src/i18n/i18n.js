import i18next from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const initI18n = async () => {
  await i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ru: {
          translation: {
            auth: {
              verification: {
                eligibility: "Проверка права на участие",
                idno: "Введите Msign, чтобы проверить право на участие в программах поддержки бизнеса.",
                verifyBtn: "Проверить",
                eligible: "Правомочно",
                companyYear: "Возраст компании",
                codeCaem: "Код CAEM",
                tax: "Соответствие налоговому законодательству",
                cnas: "Соответствие CNAS",
                prev: "Предыдущее участие",
              },
            },
          },
        },
        ro: {
          translation: {
            auth: {
              verification: {
                eligibility: "Verificarea eligibilității",
                idno: "Introduceți Msign pentru a verifica eligibilitatea pentru programele de sprijin pentru afaceri.",
                verifyBtn: "Verifică",
                eligible: "Eligibil",
                companyYear: "Vârsta companiei",
                codeCaem: "Cod CAEM",
                tax: "Conformitate fiscală",
                cnas: "Conformitate CNAS",
                prev: "Participare anterioară",
              },
            },
          },
        },
        en: {
          translation: {
            auth: {
              verification: {
                eligibility: "Eligibility Check",
                idno: "Enter Msign to check eligibility for business support programs.",
                verifyBtn: "Verify",
                eligible: "Eligible",
                companyYear: "Company Age",
                codeCaem: "CAEM Code",
                tax: "Tax Compliance",
                cnas: "CNAS Compliance",
                prev: "Previous Participation",
              },
            },
          },
        },
      },
      lng: localStorage.getItem('i18nextLng') || "en",
      fallbackLng: "en",
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
};

initI18n();

export default i18next;
