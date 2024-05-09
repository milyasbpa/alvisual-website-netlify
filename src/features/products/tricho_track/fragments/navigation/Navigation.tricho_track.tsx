import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useNavigationStore } from "@/core/zustand/navigation/store";

export interface NavigationTrichoTrackProps {}

export default function NavigationTrichoTrack(_: NavigationTrichoTrackProps) {
  const dict = useTrichoTrackDictionaries.getState().dict;
  const navigationStore = useNavigationStore();
  const handleClickBreadcrumb = (value: string) => {
    navigationStore.setIDNavigation(
      `#${value}` as
        | "#hero"
        | "#products"
        | "#about-us"
        | "#contact-us"
        | "#partners"
    );
  };
  return <Breadcrumb list={dict.breadcrumb} onClick={handleClickBreadcrumb} />;
}
