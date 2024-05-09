import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type ContactDictionariesType = typeof en;

const dictionaries: { [key: string]: ContactDictionariesType } = {
  en: en,
};
export const getContactDictionaries = (locale: Locale) => dictionaries[locale];
