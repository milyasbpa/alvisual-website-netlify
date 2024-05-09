import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useMagicMirrorDictionaries } from "../../zustand/dictionaries/store";
import { useNavigationStore } from "@/core/zustand/navigation/store";

export interface NavigationMagicMirrorProps {}

export default function NavigationMagicMirror(_: NavigationMagicMirrorProps) {
  const dict = useMagicMirrorDictionaries.getState().dict;
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
