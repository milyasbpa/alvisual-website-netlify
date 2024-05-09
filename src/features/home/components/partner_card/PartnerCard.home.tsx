import clsx from "clsx";
import { Link } from "react-router-dom";

export interface PartnerCardHomeProps {
  id?: string;
  image?: string;
  site?: string;
}

export default function PartnerCardHome({
  id = "",
  image = "",
  site = "",
}: PartnerCardHomeProps) {
  return (
    <Link
      className={clsx("w-full")}
      aria-label={id}
      to={site}
      target={"_blank"}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "border border-light-silver",
          "rounded-[1rem]",
          "py-[1.5rem]"
        )}
      >
        <div className={clsx("w-[274px] h-[102px]", "aspect-auto", "relative")}>
          <img src={image} alt={id} sizes={"(max-width:1024px) 100vw, 50vw"} />
        </div>
      </div>
    </Link>
  );
}
