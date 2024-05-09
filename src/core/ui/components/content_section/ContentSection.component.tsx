import * as React from "react";
import clsx from "clsx";

export interface ContentSectionProps {
  children?: React.ReactNode;
}

export default function ContentSection({ children }: ContentSectionProps) {
  return <div className={clsx("max-w-screen-lg w-full")}>{children}</div>;
}
