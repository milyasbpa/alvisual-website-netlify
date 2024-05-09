import { useRef } from "react";

import { NavigationStore, useNavigationStore } from "./store";

export default function NavigationStoreInitializer(state: NavigationStore) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useNavigationStore.setState(state);
    initialized.current = true;
  }
  return null;
}
