import { Button, Text } from '@components';
import React, { useEffect, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ModalProps } from '.';

export const Modal = ({ children, onClose, hasCloseBtn = true, isOpen, className, title }: ModalProps) => {
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
      <div>
        {hasCloseBtn && (
          <Button
            type="button"
            variant="text"
            className="ml-auto min-w-[16px] p-0"
            iconBefore={<AiOutlinePlus size={16} className="rotate-45 text-black" />}
            onClick={handleCloseModal}
          />
        )}
        BUTTOn
        <Text variant="h3">{title}</Text>
      </div>

      {children}
    </dialog>
  );
};
