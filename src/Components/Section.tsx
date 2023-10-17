import React from 'react';
import { Text } from '@components';
import { cn } from '@utils/cn';

interface SectionPros extends React.HTMLAttributes<HTMLElement>, React.PropsWithChildren {
  title: string;
  titleCN?: string;
}

const Section = ({ children, title, className, titleCN, ...rest }: SectionPros) => {
  return (
    <section className={cn('mb-6 mt-20 flex w-full flex-col capitalize', className)} {...rest}>
      <Text variant="h3" className={cn('mb-4', titleCN)}>
        {title}
      </Text>
      <div>{children}</div>
    </section>
  );
};

export default Section;
