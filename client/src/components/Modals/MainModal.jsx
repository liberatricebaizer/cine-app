
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoMdClose } from "react-icons/io";

// The modal now provides its own panel, so children only need to be the content.
const MainModal = ({ modalOpen, setModalOpen, children }) => {
  const closeRef = useRef(null);
  const close = () => setModalOpen(false);

  return (
    <Transition show={modalOpen} as={Fragment} appear>
      <Dialog as="div" className="relative z-50" initialFocus={closeRef} onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div
          className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative w-full max-w-lg rounded-3xl bg-[#17121f] p-8 text-white ring-1 ring-white/10 sm:p-10">
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-[#f4b942] hover:text-black"
              >
                <IoMdClose />
              </button>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MainModal;