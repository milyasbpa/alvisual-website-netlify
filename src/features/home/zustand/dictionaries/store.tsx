import { create } from "zustand";
import { HomeFeatureDictionaryType } from "../../constants/dictionaries";

export interface HomeDictionariesStore {
  dict: HomeFeatureDictionaryType;
}

export const useHomeDictionaries = create<HomeDictionariesStore>(() => ({
  dict: {} as HomeFeatureDictionaryType,
}));
