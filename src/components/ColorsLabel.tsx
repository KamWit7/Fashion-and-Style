import { cn } from '@utils/cn';

const ColorsLabel = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-nowrap items-center justify-start">
      {colors.map((color, idx) => (
        <div
          key={`color_label_${color}_${idx}`}
          className={cn('mr-2 h-4 w-4 cursor-pointer rounded-full last:mr-0 md:h-6 md:w-6')}
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

export default ColorsLabel;
