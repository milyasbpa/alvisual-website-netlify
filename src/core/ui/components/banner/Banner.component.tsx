import clsx from "clsx";

export interface BannerProps {
  image?: string;
  alt?: string;
}

export default function Banner({ image = "", alt = "" }: BannerProps) {
  return (
    <div className={clsx("w-full h-[166px] md:h-[40rem]", "relative")}>
      <img
        className={clsx("object-cover")}
        src={image}
        alt={alt}
        loading={"eager"}
        sizes={"100vw"}
      />
    </div>
  );
}
