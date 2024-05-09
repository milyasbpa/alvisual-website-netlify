import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { getTeamsFeatureDictionaries } from "@/features/teams/constants/dictionaries";
import BannerTeams from "@/features/teams/fragments/banner/Banner.teams";
import ContentTeams from "@/features/teams/fragments/content/Content.teams";
import { useTeamsDictionaries } from "@/features/teams/zustand/dictionaries/store";
import TeamsFeatureDictionariesStoreInitializer from "@/features/teams/zustand/dictionaries/initializer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Metadata from "@/core/utils/metadata/metadata.json";

export default function TeamsPage() {
  const dict = getTeamsFeatureDictionaries("en");
  useTeamsDictionaries.setState({ dict: dict });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{Metadata.teams.title}</title>
        <meta name="description" content={Metadata.teams.description} />
        <link rel="canonical" href="/teams" />
      </Helmet>
      <PublicLayout>
        <TeamsFeatureDictionariesStoreInitializer dict={dict} />
        <BannerTeams />
        <ContentTeams />
      </PublicLayout>
    </>
  );
}
