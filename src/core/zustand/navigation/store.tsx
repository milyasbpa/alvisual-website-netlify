import { create } from "zustand";

export interface NavigationStore {
  id:
    | ""
    | "#products"
    | "#about-us"
    | "#hero"
    | "#contact-us"
    | "#partners"
    | "#support";
  setIDNavigation: (payload: NavigationStore["id"]) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  id: "",
  setIDNavigation: (payload: NavigationStore["id"]) =>
    set((state) => ({
      ...state,
      id: payload,
    })),
}));
