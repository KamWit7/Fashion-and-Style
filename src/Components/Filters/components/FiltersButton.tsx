import Button, { ButtonProps } from '@components/Button';

type FiltersButtonProps = { onClear: () => void; onClose?: () => void } & ButtonProps;

const FiltersButton = ({ onClear, className, title, onClose }: FiltersButtonProps) => {
  return (
    <div className={className}>
      <Button type="button" variant="text" onClick={onClear}>
        Clear Filter
      </Button>
      <Button type="button" onClick={onClose}>
        {title}
      </Button>
    </div>
  );
};

export default FiltersButton;
