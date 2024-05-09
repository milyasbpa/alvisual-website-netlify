import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type DownloadFeatureDictionariesType = typeof en;

const dictionaries: { [key: string]: DownloadFeatureDictionariesType } = {
  en: en,
};
export const getDownloadFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
