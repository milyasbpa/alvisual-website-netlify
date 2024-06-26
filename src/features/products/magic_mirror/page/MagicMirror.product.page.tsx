import clsx from "clsx";
import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getMagicMirrorFeatureDictionaries } from "@/features/products/magic_mirror/constants/dictionaries";
import BannerMagicMirror from "@/features/products/magic_mirror/fragments/banner/Banner.magic_mirror";
import { useMagicMirrorDictionaries } from "@/features/products/magic_mirror/zustand/dictionaries/store";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import NavigationMagicMirror from "@/features/products/magic_mirror/fragments/navigation/Navigation.magic_mirror";
import OverviewMagicMirror from "@/features/products/magic_mirror/fragments/overview/Overview.magic_mirror";
import MagicMirrorFeatureDictionariesStoreInitializer from "@/features/products/magic_mirror/zustand/dictionaries/initializer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Metadata from "@/core/utils/metadata/metadata.json";

export default function MagicMirrorPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getMagicMirrorFeatureDictionaries("en");
  useMagicMirrorDictionaries.setState({ dict: dict });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{Metadata.magic_mirror.title}</title>
        <meta name="description" content={Metadata.magic_mirror.description} />
        <link rel="canonical" href="/products/magic-mirror" />
      </Helmet>
      <PublicLayout>
        <MagicMirrorFeatureDictionariesStoreInitializer dict={dict} />
        <BannerMagicMirror />
        <Section>
          <ContentSection>
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full",
                "pt-[1rem] pb-[5rem]"
              )}
            >
              <NavigationMagicMirror />
              <OverviewMagicMirror />
            </div>
          </ContentSection>
        </Section>
      </PublicLayout>
    </>
  );
}
