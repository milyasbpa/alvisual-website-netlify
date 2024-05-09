import * as React from "react";

export interface CloseIconProps extends React.HTMLAttributes<SVGElement> {}

export default function CloseIcon(props: CloseIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_673_42)">
        <path
          d="M6.10023 1.90332C5.97023 1.77332 5.76023 1.77332 5.63023 1.90332L4.00023 3.52999L2.37023 1.89999C2.24023 1.76999 2.03023 1.76999 1.90023 1.89999C1.77023 2.02999 1.77023 2.23999 1.90023 2.36999L3.53023 3.99999L1.90023 5.62999C1.77023 5.75999 1.77023 5.96999 1.90023 6.09999C2.03023 6.22999 2.24023 6.22999 2.37023 6.09999L4.00023 4.46999L5.63023 6.09999C5.76023 6.22999 5.97023 6.22999 6.10023 6.09999C6.23023 5.96999 6.23023 5.75999 6.10023 5.62999L4.47023 3.99999L6.10023 2.36999C6.2269 2.24332 6.2269 2.02999 6.10023 1.90332V1.90332Z"
          {...props}
        />
      </g>
      <defs>
        <clipPath id="clip0_673_42">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
