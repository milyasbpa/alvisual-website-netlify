import clsx from "clsx";
import ChevronIcon from "@/core/ui/icons/chevron/Chevron.icon";

export interface SwipeableNavigationTrichoTrackProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function SwipeableNavigationTrichoTrack({
  onNext,
  onPrevious,
}: SwipeableNavigationTrichoTrackProps) {
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-end justify-items-end w-full"
      )}
    >
      <button
        aria-label={"previous-navigation"}
        className={clsx(
          "w-[3rem] h-[3rem]",
          "flex items-center justify-center",
          "rotate-90"
        )}
        onClick={onPrevious}
      >
        <ChevronIcon className={clsx("w-[2rem] h-[2rem]", "fill-primary")} />
      </button>
      <button
        aria-label={"next-navigation"}
        className={clsx(
          "w-[3rem] h-[3rem]",
          "flex items-center justify-center",
          "-rotate-90"
        )}
        onClick={onNext}
      >
        <ChevronIcon className={clsx("w-[2rem] h-[2rem]", "fill-primary")} />
      </button>
    </div>
  );
}
