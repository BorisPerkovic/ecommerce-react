import i18n from "i18next";
import i18next from "i18next";
import { getI18n, initReactI18next } from "react-i18next";

//NavBars
import NavBarsTranslationsEN from "../nav-bars/translations/navigationTranslations.en.json";
import NavBarsTranslationsDE from "../nav-bars/translations/navigationTranslations.de.json";
import NavBarsTranslationsES from "../nav-bars/translations/navigationTranslations.es.json";
import NavBarsTranslationsIT from "../nav-bars/translations/navigationTranslations.it.json";

//Products
import ProductsTranslationsEN from "../products/translations/productsTranslations.en.json";
import ProductsTranslationsDE from "../products/translations/productsTranslations.de.json";
import ProductsTranslationsES from "../products/translations/productsTranslations.es.json";
import ProductsTranslationsIT from "../products/translations/productsTranslations.it.json";

//Account
/* import AccountTranslationsEN from '../account/translations/accountTranslations.en.json';
import AccountTranslationsDE from '../account/translations/accountTranslations.de.json';
import AccountTranslationsES from '../account/translations/accountTranslations.es.json';
import AccountTranslationsIT from '../account/translations/accountTranslations.it.json'; */

//Order
/* import OrderTranslationsEN from '../order/translations/ordersTranslations.en.json';
import OrderTranslationsDE from '../order/translations/ordersTranslations.de.json';
import OrderTranslationsES from '../order/translations/ordersTranslations.es.json';
import OrderTranslationsIT from '../order/translations/ordersTranslations.it.json'; */

const resources = {
  en: {
    navigation: NavBarsTranslationsEN,
    products: ProductsTranslationsEN,
  },
  de: {
    navigation: NavBarsTranslationsDE,
    products: ProductsTranslationsDE,
  },
  es: {
    navigation: NavBarsTranslationsES,
    products: ProductsTranslationsES,
  },
  it: {
    navigation: NavBarsTranslationsIT,
    products: ProductsTranslationsIT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
});
export const translate = (
  ns: string,
  key: string,
  interpolationValue?: string
) => {
  const i18nInstance = getI18n();
  const lang = i18nInstance.language;
  const t = i18next.getFixedT(lang, ns);

  return t(key, { interpolationValue });
};

export default i18n;
