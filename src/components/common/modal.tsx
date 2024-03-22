import React from "react";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  return (
    <>
      {open && (
        <div
          className="animate-fade animate-duration-200 flex justify-center items-center top-0 left-0 fixed w-screen h-screen p-4 bg-slate-900 bg-opacity-40"
          onClick={(e) => onClose && e.target === e.currentTarget && onClose()}
        >
          <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-96 ">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
