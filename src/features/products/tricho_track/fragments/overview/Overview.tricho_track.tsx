import clsx from "clsx";

import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import SwipeableProductReviewCardMagicMirror from "../../components/swipeable_product_review_card/SwipeableProductReviewCard.tricho_track";

export interface OverviewTrichoTrackProps {}

export default function OverviewTrichoTrack(_: OverviewTrichoTrackProps) {
  const dict = useTrichoTrackDictionaries().dict.overview;
  const contents = dict.description.split("\n");

  const solutions = dict.solutions.map((solution) => {
    if (solution.text.includes("{{issues}}")) {
      return {
        ...solution,
        text: solution.text.replace(
          "{{issues}}",
          `
          <ul style="list-style-type:disc; padding-left:3rem;">
            <li style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                <span style="font-size:1rem; line-height:2rem; font-weight:600; color:#3A68B1;">
                ${dict.issues[0].name}<span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">:</span>
                </span>
                <span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                 ${dict.issues[0].description}
                </span>
            </li> 
            <li style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                <span style="font-size:1rem; line-height:2rem; font-weight:600; color:#3A68B1;">
                ${dict.issues[1].name}<span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">:</span>
                </span>
                <span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                ${dict.issues[1].description}
                </span>
            </li> 
            <li style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                <span style="font-size:1rem; line-height:2rem; font-weight:600; color:#3A68B1;">
                ${dict.issues[2].name}<span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">:</span>
                </span>
                <span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                ${dict.issues[2].description}
                </span>
            </li> 
            <li style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                <span style="font-size:1rem; line-height:2rem; font-weight:600; color:#3A68B1;">
                ${dict.issues[3].name}<span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">:</span>
                </span>
                <span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                ${dict.issues[3].description}
                </span>
            </li>  
            <li style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                <span style="font-size:1rem; line-height:2rem; font-weight:600; color:#3A68B1;">
                ${dict.issues[4].name}<span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">:</span>
                </span>
                <span style="font-size:1rem; line-height:2rem; font-weight:400; color:#666666;">
                ${dict.issues[4].description}
                </span>
            </li> 
          </ul>
        `
        ),
      };
    }
    return solution;
  });

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
          "w-full"
        )}
      >
        <h4
          className={clsx(
            "text-[1.125rem] leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem]"
          )}
        >
          {dict.pre}
        </h4>
        <h2
          className={clsx(
            "text-[2.5rem] leading-[3.375rem] md:text-[3rem] md:leading-[4rem] text-eerie-black font-bold"
          )}
        >
          {dict.headline}
        </h2>
        <p
          className={clsx(
            "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-primary"
          )}
        >
          {dict.subline}
        </p>
      </div>

      {/* image */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "relative",
          "bg-lotion"
        )}
      >
        <div
          className={clsx(
            "h-[222px] md:h-[432px]",
            "relative",
            "aspect-[9064/6144]"
          )}
        >
          <img
            src={dict.image}
            alt={"tricho-track"}
            loading={"eager"}
            sizes={"100vw"}
          />
        </div>
      </div>

      {/* text */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
          "w-full"
        )}
      >
        {contents.map((content, contentIndex) => {
          if (content === "{{solutions}}") {
            return (
              <SwipeableProductReviewCardMagicMirror
                key={contentIndex}
                items={solutions}
              />
            );
          } else if (content === "{{principles}}") {
            return (
              <SwipeableProductReviewCardMagicMirror
                key={contentIndex}
                items={dict.principles}
              />
            );
          }

          return (
            <p
              key={contentIndex}
              className={clsx(
                "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray"
              )}
            >
              {content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
