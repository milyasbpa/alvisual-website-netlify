import clsx from "clsx";

export interface FooterCompanyProps {
  image?: string;
  imageAlt?: string;
  description?: string;
}

export default function FooterCompany({
  image = "",
  imageAlt = "",
  description = "",
}: FooterCompanyProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
        "w-full"
      )}
    >
      <div className={clsx("h-[2rem]", "relative", "aspect-[6240/1040]")}>
        <img
          src={image}
          alt={imageAlt}
          sizes={"(max-width:1024px) 100vw, 33vw"}
        />
      </div>

      <p
        className={clsx(
          "text-[1rem] leading-[1.5rem] text-chinese-white font-light text-left"
        )}
      >
        {description}
      </p>
    </div>
  );
}
