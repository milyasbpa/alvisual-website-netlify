import clsx from "clsx";

export type BadgeVariant = "info";

export interface BadgeProps {
  variant?: BadgeVariant;
  text?: string;
}

export default function Badge({ variant = "info", text = "" }: BadgeProps) {
  const imageSrc =
    variant === "info"
      ? "/icons/badge/info.icon.png"
      : "/icons/badge/info.icon.png";
  return (
    <div
      className={clsx(
        "grid grid-flow-row md:grid-flow-col place-content-start place-items-start gap-[0.5rem]",
        "w-full",
        "p-[1.5rem]",
        "rounded-[1.5rem]",
        "border border-cerulean-blue",
        variant === "info" ? "bg-azureish-white" : "bg-azureish-white"
      )}
    >
      <div className={clsx("w-[2rem] h-[2rem]", "relative")}>
        <img src={imageSrc} alt={variant} sizes={"24px"} />
      </div>
      <p
        className={clsx(
          variant === "info" ? "text-cerulean-blue" : "text-cerulean-blue",
          "text-[1.125rem] leading-[2rem] font-light"
        )}
      >
        {text}
      </p>
    </div>
  );
}
