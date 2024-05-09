import clsx from "clsx";

export interface ISwipeableStepTrichoTrackProps {
  total?: number;
  step?: number;
}

export default function SwipeableStepTrichoTrack({
  total = 0,
  step = 0,
}: ISwipeableStepTrichoTrackProps) {
  const numberArray = Array.from({ length: total }, (_, i) => i);
  return (
    <div
      className={clsx(
        "grid place-content-start place-items-start gap-[1.5rem]",
        "py-[1rem]"
      )}
      style={{
        gridTemplateColumns: `repeat(${total},1fr)`,
      }}
    >
      {numberArray.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "w-full h-[0.25rem]",
            step === item ? "bg-primary" : "bg-chinese-white"
          )}
        />
      ))}
    </div>
  );
}
