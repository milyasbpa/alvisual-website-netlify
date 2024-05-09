import { useMagicMirrorDictionaries } from "../../zustand/dictionaries/store";
import Banner from "@/core/ui/components/banner/Banner.component";

export interface BannerMagicMirrorProps {}

export default function BannerMagicMirror(_: BannerMagicMirrorProps) {
  const dict = useMagicMirrorDictionaries.getState().dict.banner;
  return <Banner image={dict.image} alt={dict.alt} />;
}
