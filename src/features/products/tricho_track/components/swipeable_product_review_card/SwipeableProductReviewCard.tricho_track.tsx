import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import clsx from "clsx";
import SlideableProductReviewCardTrichoTrack from "../slideable_product_review_card/SlideableProductReviewCard.tricho_track";
import SwipeableNavigationTrichoTrack from "../swipeable_navigation/SwipeableNavigation.tricho_track";

import "swiper/css";
import SwipeableStepTrichoTrack from "../swipeable_step/SwipeableStep.tricho_track";

export interface SwipeableProductReviewCardMagicMirrorProps {
  items?: {
    video: string;
    text: string;
  }[];
}

export default function SwipeableProductReviewCardMagicMirror({
  items = [],
}: SwipeableProductReviewCardMagicMirrorProps) {
  const [step, setStep] = useState<number>(0);
  const swiperElRef = useRef<SwiperCore>();

  const handleNext = () => {
    swiperElRef.current?.slideNext();
  };
  const handlePrevious = () => {
    swiperElRef.current?.slidePrev();
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setStep((_) => swiper.realIndex);
  };

  return (
    <section
      className={clsx(
        "container",
        "border border-chinese-white",
        "p-[1rem]",
        "rounded-[0.5rem]"
      )}
    >
      <Swiper
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiperElRef.current = swiper;
        }}
        loop={true}
        loopPreventsSliding={true}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={clsx("w-full")}>
            <SlideableProductReviewCardTrichoTrack
              videoURL={item.video}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={clsx("hidden md:block", "w-full")}>
        <SwipeableNavigationTrichoTrack
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>

      <SwipeableStepTrichoTrack total={items.length} step={step} />
    </section>
  );
}
