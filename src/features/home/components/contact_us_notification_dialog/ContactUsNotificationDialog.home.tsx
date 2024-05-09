import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import CloseIcon from "@/core/ui/icons/close/Close.icon";
import DialogComponent from "@/core/ui/components/dialog/Dialog.component";

export interface ContactUsNotificationDialogHomeProps {
  open?: boolean;
  message?: string;
  description?: string;
  primaryCTALabel?: string;
  icon?: string;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function ContactUsNotificationDialogHome({
  open = false,
  message = "",
  description = "",
  primaryCTALabel = "",
  icon = "",
  onClose,
}: ContactUsNotificationDialogHomeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);
  return (
    <DialogComponent isOpen={isOpen} onClose={handleClose}>
      <Dialog.Panel
        className={clsx(
          "grid grid-cols-1 gap-y-[1.5rem] items-start content-start justify-center justify-items-center",
          "w-full max-w-full lg:max-w-[540px] transform overflow-hidden rounded-[0.5rem] bg-white p-[1.5rem]",
          "text-center align-middle shadow-xl transition-all"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 gap-y-[1.5rem] place-content-center place-items-center w-full"
          )}
        >
          <div className={clsx("w-full", "flex items-center justify-end")}>
            <button onClick={handleClose}>
              <CloseIcon
                className={clsx("w-[1.5rem] h-[1.5rem]", "fill-spanish-gray")}
              />
            </button>
          </div>
          <div
            className={clsx(
              "w-[84px] h-[84px] lg:w-[100px] lg:h-[100px]",
              "relative"
            )}
          >
            <img src={icon} alt={message} sizes={"50vw"} />
          </div>
          <h3
            className={clsx(
              "text-[1.25rem] leading-[1.5rem] lg:text-[2rem] lg:leading-[2.375rem] font-semibold text-eerie-black text-center"
            )}
          >
            {message}
          </h3>

          <p
            className={clsx(
              "text-[1rem] leading-[1.25rem] lg:text-[1.125rem] lg:leading-[1.375rem] font-light text-spanish-gray"
            )}
          >
            {description}
          </p>

          <button
            type="button"
            className={clsx(
              "inline-flex w-full justify-center items-center",
              "bg-white",
              "px-[1rem] py-[1rem]",
              "text-[1rem] leading-[1.25rem] lg:text-[1.125rem] lg:leading-[2rem] font-semibold text-primary uppercase"
            )}
            onClick={handleClose}
          >
            {primaryCTALabel}
          </button>
        </div>
      </Dialog.Panel>
    </DialogComponent>
  );
}
