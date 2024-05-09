import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type CompanyDictionariesType = typeof en;

const dictionaries: { [key: string]: CompanyDictionariesType } = {
  en: en,
};
export const getCompanyDictionaries = (locale: Locale) => dictionaries[locale];
