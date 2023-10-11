import React from 'react'
import { Text } from '@components'
import { twMerge } from 'tailwind-merge'

interface SectionPros
  extends React.HTMLAttributes<HTMLElement>,
    React.PropsWithChildren {
  title: string
  classChildren?: string
}

const Section = ({
  children,
  title,
  className,
  classChildren,
  ...rest
}: SectionPros) => {
  return (
    <section
      className={twMerge(
        'mt-20 mb-6 capitalize flex flex-col w-full',
        className
      )}
      {...rest}>
      <Text variant='h3' className='mb-4'>
        {title}
      </Text>
      <div className={classChildren}>{children}</div>
    </section>
  )
}

export default Section
