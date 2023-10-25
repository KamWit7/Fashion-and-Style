import Button, { ButtonProps } from '@components/Button';
import { cn } from '@utils/cn';

type FiltersButtonProps = { onClear: () => void; onClose?: () => void } & ButtonProps;

const FiltersButton = ({ onClear, className, title, onClose }: FiltersButtonProps) => {
  return (
    <div className={cn('flex justify-between', className)}>
      <Button className="flex-1" type="button" variant="text" onClick={onClear}>
        Clear Filter
      </Button>
      <Button className="flex-1" type="button" onClick={onClose}>
        {title}
      </Button>
    </div>
  );
};

export default FiltersButton;
