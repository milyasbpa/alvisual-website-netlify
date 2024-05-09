import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useTeamsDictionaries } from "../../zustand/dictionaries/store";
import PersonnelCardTeams from "../../components/personnel_card/PersonnelCard.teams";
import { useNavigationStore } from "@/core/zustand/navigation/store";

export interface ContentTeamsProps {}

export default function ContentTeams(_: ContentTeamsProps) {
  const dict = useTeamsDictionaries.getState().dict;
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
  return (
    <div id={"meet-our-teams"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
              "w-full",
              "py-[2rem] md:py-[2rem]"
            )}
          >
            <Breadcrumb
              list={dict.breadcrumb}
              onClick={handleClickBreadcrumb}
            />

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h2
                className={clsx(
                  "text-[2.5rem] md:text-[3rem] leading-[3.375rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.team.headline}
              </h2>
              <h3
                className={clsx(
                  "text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[2rem] text-primary font-light"
                )}
              >
                {dict.team.subline}
              </h3>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-y-[1.5rem] gap-x-[1.5rem]",
                  "w-full"
                )}
              >
                {dict.team.founders.map((founder) => (
                  <PersonnelCardTeams
                    key={founder.id}
                    name={founder.name}
                    role={founder.role}
                    photo={founder.photo}
                    description={founder.description}
                    variant={
                      founder.name.toLowerCase().includes("yusong")
                        ? "narrow"
                        : "wide"
                    }
                  />
                ))}
              </div>

              <hr
                className={clsx("w-full", "border-t border-t-light-silver")}
              />

              <div
                className={clsx(
                  "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-y-[1.5rem] gap-x-[1.5rem]",
                  "w-full"
                )}
              >
                {dict.team.employees.map((employee) => (
                  <PersonnelCardTeams
                    key={employee.id}
                    name={employee.name}
                    role={employee.role}
                    photo={employee.photo}
                    description={employee.description}
                    variant={"narrow"}
                  />
                ))}
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
