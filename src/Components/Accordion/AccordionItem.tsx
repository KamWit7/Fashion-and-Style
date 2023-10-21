import React from 'react';
import { Text } from '@components';
import useBoolean from '@utils/useToggle';
import { cn } from '@utils/cn';
import { AiOutlinePlus } from 'react-icons/ai';

interface AccordionProps {
  title: string;
  initialState?: boolean;
}

const AccordionItem = ({ title, children, initialState }: React.PropsWithChildren<AccordionProps>) => {
  const [flag, setFlag] = useBoolean(initialState);

  return (
    <div className={cn('cursor-pointer border', flag ? 'border-primary-400' : 'border-primary-600')}>
      <div
        className={cn(
          'flex items-center justify-between p-4',
          'transition-colors duration-300',
          flag ? 'bg-transparent text-primary-400' : 'bg-primary-600 text-white'
        )}
        onClick={setFlag.toggle}
      >
        <Text variant="h5" className="text-12 font-bold">
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

export default AccordionItem;
