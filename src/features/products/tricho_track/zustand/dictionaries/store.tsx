import { create } from "zustand";
import { TrichoTrackFeatureDictionariesType } from "../../constants/dictionaries";

export interface TrichoTrackDictionariesStore {
  dict: TrichoTrackFeatureDictionariesType;
}

export const useTrichoTrackDictionaries = create<TrichoTrackDictionariesStore>(
  () => ({
    dict: {} as TrichoTrackFeatureDictionariesType,
  })
);
