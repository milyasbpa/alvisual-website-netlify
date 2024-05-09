import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { getTrichoTrackFeatureDictionaries } from "@/features/products/tricho_track/constants/dictionaries";
import BannerTrichoTrack from "@/features/products/tricho_track/fragments/banner/Banner.tricho_track";
import { useTrichoTrackDictionaries } from "@/features/products/tricho_track/zustand/dictionaries/store";
import NavigationTrichoTrack from "@/features/products/tricho_track/fragments/navigation/Navigation.tricho_track";
import OverviewTrichoTrack from "@/features/products/tricho_track/fragments/overview/Overview.tricho_track";
import ArchitectureTrichoTrack from "@/features/products/tricho_track/fragments/architecture/Architecture.tricho_track";
import TrichoTrackFeatureDictionariesStoreInitializer from "@/features/products/tricho_track/zustand/dictionaries/initializer";
import VersionTrichoTrack from "@/features/products/tricho_track/fragments/version/Version.tricho_track";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Metadata from "@/core/utils/metadata/metadata.json";

export default function TrichoTrackPage() {
  const dict = getTrichoTrackFeatureDictionaries("en");
  useTrichoTrackDictionaries.setState({ dict: dict });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{Metadata.tricho_track.title}</title>
        <meta name="description" content={Metadata.tricho_track.description} />
        <link rel="canonical" href="/products/trichotrack" />
      </Helmet>
      <PublicLayout>
        <TrichoTrackFeatureDictionariesStoreInitializer dict={dict} />
        <BannerTrichoTrack />

        <Section>
          <ContentSection>
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full",
                "py-[5rem]"
              )}
            >
              <NavigationTrichoTrack />
              <OverviewTrichoTrack />
              <VersionTrichoTrack />
              <ArchitectureTrichoTrack />
            </div>
          </ContentSection>
        </Section>
      </PublicLayout>
    </>
  );
}
