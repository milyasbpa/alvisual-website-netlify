import { useRef } from "react";

import { HomeDictionariesStore, useHomeDictionaries } from "./store";

export default function HomeFeatureDictionariesStoreInitializer(
  state: HomeDictionariesStore
) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useHomeDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
