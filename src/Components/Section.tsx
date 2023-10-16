import React from 'react'
import { Text } from '@components'
import { cn } from '@utils/cn'

interface SectionPros
  extends React.HTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  title: string
  titleCN?: string
}

const Section = ({
  children,
  title,
  className,
  titleCN,
  ...rest
}: SectionPros) => {
  return (
    <section
      className={cn('mt-20 mb-6 capitalize flex flex-col w-full', className)}
      {...rest}>
      <Text variant='h3' className={cn('mb-4', titleCN)}>
        {title}
      </Text>
      <div>{children}</div>
    </section>
  )
}

export default Section
