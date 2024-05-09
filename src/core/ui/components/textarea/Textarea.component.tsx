import * as React from "react";
import clsx from "clsx";

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
}

export default function TextArea({
  label = "",
  required = false,
  ...inputProps
}: TextAreaProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[0.25rem]",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col place-content-start place-items-start gap-x-[0.25rem]"
        )}
      >
        <p
          className={clsx(
            "text-[1rem] leading-[2rem] font-normal text-charleston-green whitespace-nowrap"
          )}
        >
          {label}
          {required && (
            <span
              className={clsx(
                "text-[1rem] leading-[2rem] font-normal text-flame"
              )}
            >
              {"  *"}
            </span>
          )}
        </p>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-start justify-items-start",
          "w-full",
          "border border-columbia-blue",
          "rounded-[0.25rem]",
          "px-[1rem] py-[0.625rem]",
          "bg-ghost-white"
        )}
      >
        <textarea
          className={clsx(
            "w-full",
            "placeholder:text-[1rem] placeholder:font-light placeholder:text-granite-gray",
            "text-[1rem] font-normal text-eerie-black",
            "bg-transparent",
            "outline-none"
          )}
          {...inputProps}
        />
      </div>
    </div>
  );
}
