import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";

import { getDownloadFeatureDictionaries } from "@/features/download/constants/dictionaries";
import BannerDownload from "@/features/download/fragments/banner/Banner.download";
import ContentDownload from "@/features/download/fragments/content/Content.download";
import { useDownloadDictionaries } from "@/features/download/zustand/dictionaries/store";
import DownloadFeatureDictionariesStoreInitializer from "@/features/download/zustand/dictionaries/initializer";
import { useEffect } from "react";

export default function DownloadPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getDownloadFeatureDictionaries("en");
  useDownloadDictionaries.setState({ dict: dict });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DownloadFeatureDictionariesStoreInitializer dict={dict} />
      <PublicLayout>
        <BannerDownload />
        <ContentDownload />
      </PublicLayout>
    </>
  );
}
