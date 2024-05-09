import clsx from "clsx";
import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import VersionCardTrichoTrack from "../../components/version_card/VersionCard.tricho_track";

export interface VersionTrichoTrackProps {}

export default function VersionTrichoTrack(_: VersionTrichoTrackProps) {
  const dict = useTrichoTrackDictionaries.getState().dict.version;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]",
        "w-full"
      )}
    >
      <h4
        className={clsx(
          "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem]"
        )}
      >
        {dict.title}
      </h4>
      <p
        className={clsx(
          "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray"
        )}
      >
        {dict.description}
      </p>

      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-x-[1.25rem] gap-y-[1.25rem]",
          "w-full"
        )}
      >
        {dict.items.map((item, index) => (
          <VersionCardTrichoTrack
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
