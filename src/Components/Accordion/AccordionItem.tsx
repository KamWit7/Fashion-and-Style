import React from 'react';
import { Text } from '@components';
import useBoolean from '@utils/useToggle';

interface AccordionProps {
  title: string;
}

const AccordionItem = ({ title, children }: React.PropsWithChildren<AccordionProps>) => {
  const [flag, setFlag] = useBoolean();

  return (
    <div>
      <div className="flex items-center justify-between" onClick={setFlag.toggle}>
        <Text variant="h3" className="text-16 font-bold">
          {title}
        </Text>

        <div>+</div>
      </div>
      {flag && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
