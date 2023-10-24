import { ModalProps } from '@components/Modal';
import { Modal } from '@components';
import { cn } from '@utils/cn';

interface DrawerProps extends ModalProps {}

const Drawer = ({ isOpen, onClose, children, className, title }: DrawerProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cn('m-0', 'h-screen max-h-full w-screen max-w-full overflow-hidden', className)}
      title={title}
    >
      {children}
    </Modal>
  );
};

export default Drawer;
