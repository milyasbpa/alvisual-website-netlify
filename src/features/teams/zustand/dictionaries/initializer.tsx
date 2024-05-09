import { useRef } from "react";

import { TeamsDictionariesStore, useTeamsDictionaries } from "./store";

export default function TeamsFeatureDictionariesStoreInitializer(
  state: TeamsDictionariesStore
) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useTeamsDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
