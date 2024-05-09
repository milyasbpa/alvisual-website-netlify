import { useRef } from "react";

import {
  MagicMirrorDictionariesStore,
  useMagicMirrorDictionaries,
} from "./store";

export default function MagicMirrorFeatureDictionariesStoreInitializer(
  state: MagicMirrorDictionariesStore
) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useMagicMirrorDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
