import * as React from "react";
import clsx from "clsx";

export interface StatisticNumberProps {
  label?: string;
  initialValue?: number;
  targetValue?: number;
  duration?: number;
  unit?: string;
  interval?: number;
}

export default function StatisticNumber({
  label = "",
  initialValue = 0,
  targetValue = 0,
  duration = 4000,
  unit = "",
  interval = 6,
}: StatisticNumberProps) {
  const [count, setCount] = React.useState(initialValue);

  React.useEffect(() => {
    let startValue = initialValue;

    const counter = setInterval(() => {
      startValue = startValue + interval;
      setCount(startValue >= targetValue ? targetValue : startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, duration);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[0.25rem]"
      )}
    >
      <h1
        className={clsx(
          "text-[2.5rem] leading-[3.375rem] md:text-[52px] md:leading-[60px] lg:text-[3rem] lg:leading-[4rem] font-bold text-[#017948] text-center"
        )}
      >
        {count.toLocaleString("en-US")}
        {!!unit.length && unit}
      </h1>
      <p
        className={clsx(
          "text-[1rem] leading-[1.75rem] sm:text-[1.125rem] sm:leading-[2rem] font-medium text-center"
        )}
        style={{
          background: "linear-gradient(135deg, #2B939D 0%, #2D528A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {label}
      </p>
    </div>
  );
}
