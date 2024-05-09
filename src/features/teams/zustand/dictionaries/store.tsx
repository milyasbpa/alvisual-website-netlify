import { create } from "zustand";
import { TeamsFeatureDictionariesType } from "../../constants/dictionaries";

export interface TeamsDictionariesStore {
  dict: TeamsFeatureDictionariesType;
}

export const useTeamsDictionaries = create<TeamsDictionariesStore>((set) => ({
  dict: {} as TeamsFeatureDictionariesType,
}));
