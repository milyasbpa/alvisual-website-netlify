import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type HomeFeatureDictionaryType = typeof en;

const dictionaries: { [key: string]: HomeFeatureDictionaryType } = {
  en: en,
};
export const getHomeFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
