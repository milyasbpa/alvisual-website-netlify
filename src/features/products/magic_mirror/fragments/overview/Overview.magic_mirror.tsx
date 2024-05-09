import clsx from "clsx";
import { useMagicMirrorDictionaries } from "../../zustand/dictionaries/store";
import Badge from "@/core/ui/components/badge/Badge.component";

export interface OverviewMagicMirrorProps {}

export default function OverviewMagicMirror(_: OverviewMagicMirrorProps) {
  const dict = useMagicMirrorDictionaries.getState().dict.overview;

  const contents = dict.description.split("\n");

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
            "text-[3rem] md:text-[3rem] leading-[4rem] md:leading-[4rem] text-eerie-black font-semibold"
          )}
        >
          {dict.headline}
        </h2>
        <p
          className={clsx(
            "text-[1.125rem] leading-[2rem] font-normal text-primary"
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
            "w-[340px] h-[340px] md:w-[432px] md:h-[432px]",
            "relative"
          )}
        >
          <img src={dict.image} alt={"magic-mirror"} sizes={"100vw"} />
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
          if (content === "{{conditions}}") {
            return (
              <ul className={clsx("list-disc", "pl-[3rem]")} key={contentIndex}>
                {dict.conditions.map((condition, conditionIndex) => (
                  <li
                    key={conditionIndex}
                    className={clsx(
                      "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-semibold text-primary"
                      )}
                    >
                      {condition.name}
                    </span>
                    {": "}
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                      )}
                    >
                      {condition.description}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }

          if (content === "{{concerns}}") {
            return (
              <ul className={clsx("list-disc", "pl-[3rem]")} key={contentIndex}>
                {dict.concerns.map((concern, concernIndex) => (
                  <li
                    key={concernIndex}
                    className={clsx(
                      "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-semibold text-primary"
                      )}
                    >
                      {concern.name}
                    </span>
                    {": "}
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                      )}
                    >
                      {concern.description}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p
              key={contentIndex}
              className={clsx(
                "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
              )}
            >
              {content}
            </p>
          );
        })}
      </div>

      {/* information */}
      <Badge text={dict.information.message} />
    </div>
  );
}
