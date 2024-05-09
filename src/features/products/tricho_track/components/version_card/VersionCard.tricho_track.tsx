import clsx from "clsx";


export interface VersionCardTrichoTrackProps {
  name?: string;
  description?: string;
  image?: string;
}

export default function VersionCardTrichoTrack({
  name = "",
  description = "",
  image = "",
}: VersionCardTrichoTrackProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center w-full",
        "px-[2rem] py-[1.5rem]",
        "border border-light-silver",
        "rounded-[1.5rem]",
        "h-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-y-[1.25rem]"
        )}
      >
        <div
          className={clsx(
            "w-full aspect-[1600/2028] md:w-full md:aspect-[1600/2028]",
            "aspect-auto",
            "relative"
          )}
        >
          <img
            src={image}
            alt={name}
            // fill={true}
            sizes={"(max-width(1024px) 100vw, 50vw)"}
          />
        </div>

        <h5
          className={clsx(
            "text-[1.25rem] leading-[2rem] font-semibold text-eerie-black text-center"
          )}
        >
          {name}
        </h5>
        <p
          className={clsx(
            "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray text-center"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
