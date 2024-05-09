import * as React from "react";

import clsx from "clsx";
import { useHomeDictionaries } from "../../zustand/dictionaries/store";

import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import { useNavigationStore } from "@/core/zustand/navigation/store";
import { useNavigate } from "react-router-dom";

export interface AboutUsHomeProps {}

export default function AboutUsHome(_: AboutUsHomeProps) {
  const dict = useHomeDictionaries().dict.about_us;
  const navigate = useNavigate();
  const navigationStore = useNavigationStore();
  const handleClickAboutUs = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigationStore.setIDNavigation("#about-us");
    navigate(e.currentTarget.value);
    e.preventDefault();
  };

  // const { isIntersecting, ref } = useIntersectionObserver({
  //   delay: 2000,
  //   threshold: 0.5,
  // });

  // React.useEffect(() => {
  //   if (isIntersecting) {
  //     navigationStore.setIDNavigation("#about-us");
  //   }
  // }, [isIntersecting]);

  return (
    <div id={"about-us"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[1.5rem]",
              "w-full",
              "py-[3rem] sm:py-[6rem]"
            )}
          >
            {/* headline */}
            <div
              // ref={ref}
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h4
                className={clsx(
                  "text-[1rem] leading-[1.5rme] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem] whitespace-nowrap"
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

            {/* content */}
            <div
              className={clsx(
                "grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-[1.25rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "w-full h-full",
                  "rounded-[0.5rem]",
                  "bg-lotion",
                  "grid grid-cols-1 place-content-center place-items-center"
                )}
              >
                <div
                  className={clsx(
                    "w-full h-[240px] md:h-[380px]",
                    "aspect-auto",
                    "relative",
                    "overflow-hidden",
                    "overflow-hidden"
                  )}
                >
                  <img
                    className={clsx("object-cover")}
                    src={"/images/home/about_us.image.png"}
                    alt={"about-us_background"}
                    sizes={"(max-width:1024px) 100vw, 50vw"}
                  />
                </div>
              </div>

              <div
                className={clsx(
                  "grid grid-cols-1 items-center content-between justify-start justify-items-start gap-y-[1.25rem]",
                  "w-full h-full"
                )}
              >
                <p
                  className={clsx(
                    "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray"
                  )}
                >
                  {dict.subline}
                </p>
                <button
                  aria-label={dict.cta.primary.text}
                  className={clsx(
                    "grid grid-flow-col place-content-center place-items-center",
                    "px-[1rem] py-[0.625rem]",
                    "bg-white",
                    "border border-primary",
                    "rounded-[0.375rem]",
                    "text-[1rem] leading-[2rem] text-primary font-semibold uppercase"
                  )}
                  value={dict.cta.primary.link}
                  onClick={handleClickAboutUs}
                >
                  {dict.cta.primary.text}
                </button>
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
