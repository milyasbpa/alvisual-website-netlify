"use client";
import { useRef } from "react";

import { DownloadDictionariesStore, useDownloadDictionaries } from "./store";

export default function DownloadFeatureDictionariesStoreInitializer(
  state: DownloadDictionariesStore
) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useDownloadDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
