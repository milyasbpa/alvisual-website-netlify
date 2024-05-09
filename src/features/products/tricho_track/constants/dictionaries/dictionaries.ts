import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type TrichoTrackFeatureDictionariesType = typeof en;

const dictionaries: { [key: string]: TrichoTrackFeatureDictionariesType } = {
  en: en,
};
export const getTrichoTrackFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
