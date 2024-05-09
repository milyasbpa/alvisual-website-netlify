import clsx from "clsx";

export interface IFooterCreditsProps {
  credits?: string;
}

export default function FooterCredits({ credits }: IFooterCreditsProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center",
        "w-full",
        "h-[5rem]"
      )}
    >
      <p
        className={clsx(
          "text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.5rem] font-light text-white text-center"
        )}
      >
        {credits}
      </p>
    </div>
  );
}
