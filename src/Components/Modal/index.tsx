import Button from '@components/Button';
import React, { useEffect, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export interface ModalProps
  extends React.PropsWithChildren,
    Omit<React.DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose: () => void;
}

const Modal = ({ children, onClose, hasCloseBtn = true, isOpen, className }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) {
      return;
    }

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} className={className} onKeyDown={handleKeyDown}>
      {hasCloseBtn && (
        <Button
          type="button"
          variant="text"
          className="min-w-[16px] p-0"
          iconBefore={<AiOutlinePlus size={16} className="rotate-45 text-black" />}
          onClick={handleCloseModal}
        />
      )}

      {children}
    </dialog>
  );
};

export default Modal;
