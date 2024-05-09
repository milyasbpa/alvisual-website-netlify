"use client";

import { useRef } from "react";

import { LocaleStore, useLocaleStore } from "./store";

export default function LocaleStoreInitializer(state: LocaleStore) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useLocaleStore.setState(state);
    initialized.current = true;
  }
  return null;
}
