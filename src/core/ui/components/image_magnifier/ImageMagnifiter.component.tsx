import React, { HTMLProps, useState } from "react";
import clsx from "clsx";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CloseIcon from "../../icons/close/Close.icon";
import ZoomInIcon from "../../icons/zoom_in/ZoomIn.icon";
import ZoomOutIcon from "../../icons/zoom_out/ZoomOut.icon";

export interface ImageMagnifierProps extends HTMLProps<HTMLImageElement> {}

export default function ImageMagnifier(props: ImageMagnifierProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isZoomIn, setZoomIn] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen((_) => false);
    setZoomIn(false);
  };
  return (
    <>
      <img className={"cursor-pointer"} {...props} onClick={handleClick} />
      {isOpen && (
        <div
          className={clsx(
            "fixed",
            "top-0 left-0 right-0 bottom-0",
            "z-50",
            "bg-black-80",
            "w-full"
          )}
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut }) => (
              <React.Fragment>
                <div
                  className={clsx(
                    "grid grid-flow-col items-start content-start justify-end justify-items-end gap-[1rem]",
                    "w-full",

                    "fixed",
                    "top-[1.5rem] right-[1.5rem]",
                    "z-50"
                  )}
                >
                  <button
                    onClick={() => {
                      if (isZoomIn) {
                        zoomOut();
                      } else {
                        zoomIn();
                      }
                      setZoomIn((prev) => !prev);
                    }}
                  >
                    {isZoomIn ? (
                      <ZoomOutIcon
                        className={clsx("w-[1.5rem] h-[1.5rem]", "fill-white")}
                      />
                    ) : (
                      <ZoomInIcon
                        className={clsx("w-[1.5rem] h-[1.5rem]", "fill-white")}
                      />
                    )}
                  </button>
                  <button onClick={handleClose}>
                    <CloseIcon
                      className={clsx("w-[1.5rem] h-[1.5rem]", "fill-white")}
                    />
                  </button>
                </div>
                <TransformComponent
                  wrapperStyle={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <img
                    src={props.src?.toString() ?? ""}
                    className={clsx("h-[500px]")}
                    alt="test"
                  />
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      )}
    </>
  );
}
