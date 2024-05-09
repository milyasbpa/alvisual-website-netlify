import { useRef } from "react";

import {
  TrichoTrackDictionariesStore,
  useTrichoTrackDictionaries,
} from "./store";

export default function TrichoTrackFeatureDictionariesStoreInitializer(
  state: TrichoTrackDictionariesStore
) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useTrichoTrackDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
