import React, { useMemo } from 'react';
import { Text } from '@components';
import useBoolean from '@utils/useToggle';
import { cn } from '@utils/cn';
import { AiOutlinePlus } from 'react-icons/ai';

interface AccordionProps {
  title: string;
  initialState?: boolean;
  variant?: 'solid' | 'outline';
}

const styles = (flag?: boolean) => ({
  border: {
    solid: flag ? 'border-primary-400' : 'border-primary-600',
    outline: 'text-black',
  },
  title: {
    solid: flag ? 'bg-transparent text-primary-400' : 'bg-primary-600 text-white',
    outline: flag ? 'text-primary-600' : 'text-black',
  },
});

const Accordion = ({
  title,
  children,
  initialState,
  className,
  variant = 'solid',
}: React.PropsWithChildren<AccordionProps> & React.HTMLAttributes<HTMLDivElement>) => {
  const [flag, setFlag] = useBoolean(initialState);

  const accordionStyles = useMemo(() => {
    const { border, title } = styles(flag);

    return { border: border[variant], title: title[variant] };
  }, [flag, variant]);

  return (
    <div className={cn('cursor-pointer border', accordionStyles.border, className)}>
      <div
        className={cn('flex items-center justify-between p-4', 'transition-colors duration-300', accordionStyles.title)}
        onClick={setFlag.toggle}
      >
        <Text variant="h5" className="text-16 font-bold">
          {title}
        </Text>

        <AiOutlinePlus size={24} className={cn('transition-transform', flag && 'rotate-45')} />
      </div>

      <div
        className={cn(
          'grid grid-rows-[0fr] px-4 transition-all duration-300 ease-in-out',
          flag ? 'grid-rows-[1fr] pb-4' : 'opacity-0'
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
