import * as React from "react";

export interface MenuIconProps extends React.HTMLAttributes<SVGElement> {}

export default function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_673_45)">
        <path
          d="M1.33333 6H6.66667C6.85 6 7 5.85 7 5.66667C7 5.48333 6.85 5.33333 6.66667 5.33333H1.33333C1.15 5.33333 1 5.48333 1 5.66667C1 5.85 1.15 6 1.33333 6ZM1.33333 4.33333H6.66667C6.85 4.33333 7 4.18333 7 4C7 3.81667 6.85 3.66667 6.66667 3.66667H1.33333C1.15 3.66667 1 3.81667 1 4C1 4.18333 1.15 4.33333 1.33333 4.33333ZM1 2.33333C1 2.51667 1.15 2.66667 1.33333 2.66667H6.66667C6.85 2.66667 7 2.51667 7 2.33333C7 2.15 6.85 2 6.66667 2H1.33333C1.15 2 1 2.15 1 2.33333Z"
          {...props}
        />
      </g>
      <defs>
        <clipPath id="clip0_673_45">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
