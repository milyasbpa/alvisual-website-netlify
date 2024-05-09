import { Locale } from "@/core/utils/i18";
import { create } from "zustand";

export interface LocaleStore {
  locale: Locale;
}

export const useLocaleStore = create<LocaleStore>((_) => ({
  locale: "en",
}));
