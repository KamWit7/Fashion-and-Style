import { Button, Text } from '@components';
import React, { useEffect, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export interface ModalProps
  extends React.PropsWithChildren,
    Omit<React.DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose: () => void;
  title?: string;
}

const Modal = ({ children, onClose, hasCloseBtn = true, isOpen, className, title }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) {
      return;
    }

    if (isOpen) {
      modalElement.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      modalElement.close();
      document.body.style.overflow = 'auto';
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
      <div className="flex items-center justify-between pb-4">
        {title && <Text variant="h3">{title}</Text>}
        {hasCloseBtn && (
          <Button
            type="button"
            variant="text"
            className="mr-4 min-w-[24px] p-0"
            iconBefore={<AiOutlinePlus size={24} className="rotate-45 text-black" />}
            onClick={handleCloseModal}
          />
        )}
      </div>

      {children}
    </dialog>
  );
};

export default Modal;
