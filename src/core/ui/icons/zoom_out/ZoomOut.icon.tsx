import * as React from "react";

export interface ZoomOutIconProps extends React.HTMLAttributes<SVGElement> {}

export default function ZoomOutIcon(props: ZoomOutIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_675_91)">
        <path
          d="M5.16666 4.66663H4.90333L4.80999 4.57663C5.20999 4.10996 5.41666 3.4733 5.30333 2.79663C5.14666 1.86996 4.37333 1.12996 3.43999 1.01663C2.02999 0.843298 0.843328 2.02996 1.01666 3.43996C1.12999 4.3733 1.86999 5.14663 2.79666 5.3033C3.47333 5.41663 4.10999 5.20996 4.57666 4.80996L4.66666 4.9033V5.16663L6.08666 6.5833C6.22333 6.71996 6.44333 6.71996 6.57999 6.5833L6.58333 6.57996C6.71999 6.4433 6.71999 6.2233 6.58333 6.08663L5.16666 4.66663ZM3.16666 4.66663C2.33666 4.66663 1.66666 3.99663 1.66666 3.16663C1.66666 2.33663 2.33666 1.66663 3.16666 1.66663C3.99666 1.66663 4.66666 2.33663 4.66666 3.16663C4.66666 3.99663 3.99666 4.66663 3.16666 4.66663ZM2.49999 2.99996H3.83333C3.92666 2.99996 3.99999 3.0733 3.99999 3.16663C3.99999 3.25996 3.92666 3.3333 3.83333 3.3333H2.49999C2.40666 3.3333 2.33333 3.25996 2.33333 3.16663C2.33333 3.0733 2.40666 2.99996 2.49999 2.99996Z"
          {...props}
        />
      </g>
      <defs>
        <clipPath id="clip0_675_91">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
