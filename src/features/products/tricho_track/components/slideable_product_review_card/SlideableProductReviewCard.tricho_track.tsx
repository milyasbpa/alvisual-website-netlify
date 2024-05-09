import clsx from "clsx";

export interface ISlideableProductReviewCardTrichoTrackProps {
  videoURL?: string;
  text?: string;
}

export default function SlideableProductReviewCardTrichoTrack({
  videoURL = "",
  text = "",
}: ISlideableProductReviewCardTrichoTrackProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 items-center content-center justify-start justify-items-start gap-[1.25rem]",
        "w-full"
      )}
    >
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline
        className={clsx("w-full", "aspect-square")}
      >
        <source src={videoURL} />
      </video>

      <div
        className={clsx(
          "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray"
        )}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
