import clsx from "clsx";
import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import PartnerCardHome from "../../components/partner_card/PartnerCard.home";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
// import { useNavigationStore } from "@/core/zustand/navigation/store";

export interface PartnersHomeProps {}

export default function PartnersHome(_: PartnersHomeProps) {
  const dict = useHomeDictionaries.getState().dict.partner;
  // const navigationStore = useNavigationStore();
  // const { isIntersecting, ref } = useIntersectionObserver({
  //   delay: 2000,
  //   threshold: 0.5,
  // });

  // React.useEffect(() => {
  //   if (isIntersecting) {
  //     navigationStore.setIDNavigation("#partners");
  //   }
  // }, [isIntersecting]);
  return (
    <div id={"partners"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[1.5rem]",
              "w-full",
              "py-[3rem] md:py-[6rem]"
            )}
          >
            {/* headline */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h4
                // ref={ref}
                className={clsx(
                  "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-light uppercase tracking-[0.3rem] whitespace-nowrap"
                )}
              >
                {dict.pre}
              </h4>
              <h2
                className={clsx(
                  "text-[2.5rem] leading-[3.375rem] md:text-[3rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.headline}
              </h2>
            </div>

            {/* partners */}
            <div
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-y-[1.25rem] gap-x-[1.25rem]",
                "w-full"
              )}
            >
              {dict.list.map((listItem) => (
                <PartnerCardHome
                  key={listItem.id}
                  id={listItem.id}
                  site={listItem.site}
                  image={listItem.image}
                />
              ))}
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
