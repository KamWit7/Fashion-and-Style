import Modal, { ModalProps } from '@components/Modal';
import { cn } from '@utils/cn';

interface DrawerProps extends ModalProps {}

const Drawer = ({ isOpen, onClose, children, className }: DrawerProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={cn('d modal:bg-red-100 m-0 h-screen w-screen', className)}>
      {children}
    </Modal>
  );
};

export default Drawer;
