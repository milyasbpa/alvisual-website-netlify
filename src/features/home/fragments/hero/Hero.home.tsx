"use client";
import * as React from "react";
import clsx from "clsx";

import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";

import StatisticNumber from "../../components/statistic_number/StatisticNumber.home";
import { useNavigationStore } from "@/core/zustand/navigation/store";

export interface HeroHomeProps {}

export default function HeroHome(_: HeroHomeProps) {
  const dict = useHomeDictionaries.getState().dict.hero;
  const motto = `${dict.motto.instant}. <span style="font-size:48px; font-weight:bold; background:linear-gradient(135deg, #2B939D 0%, #2D528A 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent">${dict.motto.intelligent}</span>. ${dict.motto.incredible}. `;

  const navigationStore = useNavigationStore();

  const handleClickPrimaryCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigationStore.setIDNavigation(
      e.currentTarget.value as
        | "#products"
        | "#contact-us"
        | "#hero"
        | "#about-us"
        | "#partners"
    );
  };

  const handleClickSecondaryCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigationStore.setIDNavigation(
      e.currentTarget.value as
        | "#products"
        | "#contact-us"
        | "#hero"
        | "#about-us"
        | "#partners"
    );
  };

  // const { isIntersecting, ref } = useIntersectionObserver({
  //   delay: 2000,
  //   threshold: 0.5,
  // });

  // React.useEffect(() => {
  //   if (isIntersecting) {
  //     navigationStore.setIDNavigation("#hero");
  //   }
  // }, [isIntersecting]);
  return (
    <div id={"hero"} className={clsx("w-full", "py-[72px] sm:py-[5.5rem]")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[2rem] sm:gap-y-[4rem]",
              "w-full",
              "py-[1rem] sm:pt-[6rem] sm:pb-[2rem]"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-1 place-items-center place-content-center gap-y-[2rem]"
              )}
            >
              <h1
                // ref={ref}
                className={clsx(
                  "text-[2.5rem] leading-[3.375rem] md:text-[52px] md:leading-[60px] lg:text-[3rem] lg:leading-[4rem] font-bold text-eerie-black text-center"
                )}
                dangerouslySetInnerHTML={{ __html: motto }}
              />

              <p
                className={clsx(
                  "text-[1rem] leading-[1.75rem] sm:text-[1.125rem] sm:leading-[2rem] text-granite-gray font-light text-center"
                )}
              >
                {dict.description}
              </p>

              <div
                className={clsx(
                  "flex items-center justify-center flex-wrap gap-[1.25rem] sm:gap-[1.5rem]",
                  "w-full"
                )}
              >
                <button
                  aria-label={dict.cta.primary.text}
                  className={clsx(
                    "grid grid-flow-col place-content-center place-items-center",
                    "px-[1.25rem] py-[0.625rem]",
                    "bg-primary",
                    "rounded-[0.375rem]",
                    "border border-primary",
                    "text-[1rem] leading-[2rem] text-white font-semibold uppercase"
                  )}
                  value={dict.cta.primary.link}
                  onClick={handleClickPrimaryCTA}
                >
                  {dict.cta.primary.text}
                </button>
                <button
                  aria-label={dict.cta.secondary.text}
                  className={clsx(
                    "grid grid-flow-col place-content-center place-items-center",
                    "px-[1.25rem] py-[0.625rem]",
                    "bg-white",
                    "border border-primary",
                    "rounded-[0.375rem]",
                    "text-[1rem] leading-[2rem] text-primary font-semibold uppercase"
                  )}
                  value={dict.cta.secondary.link}
                  onClick={handleClickSecondaryCTA}
                >
                  {dict.cta.secondary.text}
                </button>
              </div>
            </div>

            <div
              className={clsx("grid grid-cols-1 sm:grid-flow-col gap-[2rem]")}
            >
              <StatisticNumber
                initialValue={0}
                targetValue={6}
                label={"Pilot Outlets"}
                duration={200}
                interval={1}
              />
              <StatisticNumber
                initialValue={0}
                targetValue={2000}
                unit={"+"}
                label={"Satisfied Customers"}
                duration={1}
                interval={9}
              />
              <StatisticNumber
                initialValue={0}
                targetValue={30000}
                unit={"+"}
                label={"Accurate Scans"}
                duration={1}
                interval={99}
              />
            </div>
          </div>
        </ContentSection>
      </Section>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "bg-lotion"
        )}
      >
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "w-full",
              "overflow-hidden"
            )}
          >
            <div
              className={clsx(
                "h-[330px] lg:h-[648px]",
                "aspect-[6312/4000]",
                "relative"
              )}
            >
              <img
                src={"/images/home/hero.image.png"}
                alt={"hero-image"}
                loading={"eager"}
                sizes={"100vw"}
              />
            </div>
          </div>
        </ContentSection>
      </div>
    </div>
  );
}
