import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type MagicMirrorFeatureDictionariesType = typeof en;

const dictionaries: { [key: string]: MagicMirrorFeatureDictionariesType } = {
  en: en,
};
export const getMagicMirrorFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
