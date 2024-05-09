import clsx from "clsx";

export interface FooterLinkProps {
  title?: string;
  list?: {
    id: string;
    name: string;
    link: string;
    type: string;
    tag: string;
  }[];
  activeTargetID?: string;
  onClick?: (data: {
    id: string;
    name: string;
    link: string;
    type: string;
    tag: string;
  }) => void;
}

export default function FooterLink({
  title = "",
  list = [],
  activeTargetID = "",
  onClick = () => {},
}: FooterLinkProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[0.75rem] w-full"
      )}
    >
      <p
        className={clsx(
          "text-[1.25rem] font-medium uppercase text-white",
          "whitespace-nowrap"
        )}
      >
        {title}
      </p>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[0.5rem]",
          "w-full"
        )}
      >
        {list.map((listItem) => (
          <button
            aria-label={listItem.name}
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start",
              "w-full",
              "px-[0.75rem] py-[0.5rem] md:py-[0.75rem] md:px-[0.75rem]",
              "text-[0.875rem] font-light uppercase",
              listItem.link === activeTargetID
                ? "text-primary"
                : "text-chinese-white hover:text-primary",
              "cursor-pointer"
            )}
            key={listItem.name}
            value={listItem.link}
            onClick={() => onClick(listItem)}
          >
            {listItem.name}
          </button>
        ))}
      </div>
    </div>
  );
}
