import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

export interface DialogComponentProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

export default function DialogComponent({
  isOpen = false,
  children,
  onClose,
}: DialogComponentProps) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* <div></div> */}
          <div className={clsx("fixed inset-0 bg-raisin-black-50")} />
        </Transition.Child>

        <div className={clsx("fixed inset-0 overflow-y-auto")}>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
