import { create } from "zustand";
import { MagicMirrorFeatureDictionariesType } from "../../constants/dictionaries";

export interface MagicMirrorDictionariesStore {
  dict: MagicMirrorFeatureDictionariesType;
}

export const useMagicMirrorDictionaries = create<MagicMirrorDictionariesStore>(
  () => ({
    dict: {} as MagicMirrorFeatureDictionariesType,
  })
);
