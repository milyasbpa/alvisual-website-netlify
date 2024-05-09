import { create } from "zustand";
import { DownloadFeatureDictionariesType } from "../../constants/dictionaries";

export interface DownloadDictionariesStore {
  dict: DownloadFeatureDictionariesType;
}

export const useDownloadDictionaries = create<DownloadDictionariesStore>(
  () => ({
    dict: {} as DownloadFeatureDictionariesType,
  })
);
