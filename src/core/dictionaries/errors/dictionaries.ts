import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type ErrorsDictionariesType = typeof en;

const dictionaries: { [key: string]: ErrorsDictionariesType } = {
  en: en,
};
export const getErrorsDictionaries = (locale: Locale) => dictionaries[locale];
