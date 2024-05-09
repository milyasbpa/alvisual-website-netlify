import clsx from "clsx";
import { useDownloadDictionaries } from "../../zustand/dictionaries/store";
import Banner from "@/core/ui/components/banner/Banner.component";

export interface BannerDownloadProps {}

export default function BannerDownload(_: BannerDownloadProps) {
  const dict = useDownloadDictionaries.getState().dict.banner;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start pt-[72px]"
      )}
    >
      <Banner image={dict.image} alt={dict.alt} />
    </div>
  );
}
