import clsx from "clsx";
import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import ImageMagnifier from "@/core/ui/components/image_magnifier/ImageMagnifiter.component";

export interface ArchitectureTrichoTrackProps {}

export default function ArchitectureTrichoTrack(
  _: ArchitectureTrichoTrackProps
) {
  const dict = useTrichoTrackDictionaries.getState().dict.architecture;
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
        {dict.pre}
      </h4>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]",
          "w-full"
        )}
      >
        <div className={clsx("w-full", "aspect-[10064/6568]", "relative")}>
          <ImageMagnifier src={dict.image} alt={dict.pre} sizes={"100vw"} />
        </div>
      </div>
    </div>
  );
}
