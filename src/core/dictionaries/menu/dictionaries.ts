import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type MenuDictionariesType = typeof en;

const dictionaries: { [key: string]: MenuDictionariesType } = {
  en: en,
};
export const getMenuDictionaries = (locale: Locale) => dictionaries[locale];
