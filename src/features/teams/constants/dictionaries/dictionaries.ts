import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type TeamsFeatureDictionariesType = typeof en;

const dictionaries: { [key: string]: TeamsFeatureDictionariesType } = {
  en: en,
};
export const getTeamsFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
