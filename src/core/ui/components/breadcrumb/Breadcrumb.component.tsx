import clsx from "clsx";
import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  list?: {
    id: string;
    name: string;
    link: string;
    disabled: boolean;
  }[];
  separator?: string;
  onClick?: (value: string) => void;
}

export default function Breadcrumb({
  list = [],
  separator = "/",
  onClick = () => {},
}: BreadcrumbProps) {
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[1rem]",
        "w-full"
      )}
    >
      {list.map((listItem) => {
        if (listItem.disabled) {
          return (
            <span
              key={listItem.name}
              className={clsx(
                "text-[1.125rem] font-bold text-primary uppercase whitespace-nowrap"
              )}
            >
              {listItem.name}
            </span>
          );
        }
        return (
          <div
            key={listItem.name}
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[1rem]"
            )}
          >
            <Link
              aria-label={listItem.name}
              to={listItem.link}
              className={clsx(
                "text-[1.125rem] font-light text-spanish-gray uppercase",
                "cursor-pointer",
                "whitespace-nowrap"
              )}
              onClick={() => onClick(listItem.id)}
            >
              {listItem.name}
            </Link>
            <p
              className={clsx(
                "text-[1.125rem] font-light text-spanish-gray uppercase"
              )}
            >
              {separator}
            </p>
          </div>
        );
      })}
    </div>
  );
}
