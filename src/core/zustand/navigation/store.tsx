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
  inspectionID:
    | ""
    | "#products"
    | "#about-us"
    | "#hero"
    | "#contact-us"
    | "#partners"
    | "#support";
  setIDNavigation: (payload: NavigationStore["id"]) => void;
  setInspectionIDNavigation: (payload: NavigationStore["inspectionID"]) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  id: "",
  inspectionID: "",
  setIDNavigation: (payload: NavigationStore["id"]) =>
    set((state) => ({
      ...state,
      id: payload,
    })),
  setInspectionIDNavigation: (payload: NavigationStore["inspectionID"]) =>
    set((state) => ({
      ...state,
      inspectionID: payload,
    })),
}));
