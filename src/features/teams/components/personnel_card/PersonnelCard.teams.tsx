import clsx from "clsx";

export interface PersonnelCardTeamsProps {
  name?: string;
  role?: string;
  photo?: string;
  description?: string;
  variant?: "wide" | "narrow";
}

export default function PersonnelCardTeams({
  name = "",
  role = "",
  photo = "",
  description = "",
  variant = "narrow",
}: PersonnelCardTeamsProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-y-[1.25rem]",
        "w-full h-full",
        "rounded-[0.5rem]",
        "border border-light-silver",
        `px:[3.375rem] py-[1rem]`,
        `${
          variant === "wide" ? "md:px-[2rem]" : "md:px-[3.375rem]"
        } md:py-[1rem]`
      )}
    >
      <div
        className={clsx(
          "w-[200px] h-[200px]",
          "rounded-[50%]",
          "relative",
          "overflow-hidden"
        )}
      >
        <img
          className={clsx("object-cover")}
          src={photo}
          alt={name}
          sizes={"(max-width:1024px) 100vw, 50vw"}
        />
      </div>

      <p
        className={clsx(
          "text-[1.25rem] leading-[2rem] font-semibold text-eerie-black text-center"
        )}
      >
        {name}
      </p>
      <p
        className={clsx(
          "text-[1.125rem] leading-[2rem] font-light text-granite-gray text-center"
        )}
      >
        {role}
      </p>
      {!!description.length && (
        <p
          className={clsx(
            "text-[1.125rem] leading-[2rem] font-thin text-granite-gray text-center"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
