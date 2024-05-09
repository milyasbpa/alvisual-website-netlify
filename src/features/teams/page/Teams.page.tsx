import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getTeamsFeatureDictionaries } from "@/features/teams/constants/dictionaries";
import BannerTeams from "@/features/teams/fragments/banner/Banner.teams";
import ContentTeams from "@/features/teams/fragments/content/Content.teams";
import { useTeamsDictionaries } from "@/features/teams/zustand/dictionaries/store";

import TeamsFeatureDictionariesStoreInitializer from "@/features/teams/zustand/dictionaries/initializer";
import { useEffect } from "react";

export default function TeamsPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getTeamsFeatureDictionaries("en");
  useTeamsDictionaries.setState({ dict: dict });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PublicLayout>
      <TeamsFeatureDictionariesStoreInitializer dict={dict} />
      <BannerTeams />
      <ContentTeams />
    </PublicLayout>
  );
}
