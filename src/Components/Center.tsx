import React from 'react'
import { cn } from '@utils/cn'

interface CenterProps {
  className?: string
  bg?: string
}

const Center = ({
  className,
  children,
  bg,
}: React.PropsWithChildren<CenterProps>) => {
  return (
    <section className={cn(bg || 'bg-white', 'px-4 md:px-28', className)}>
      <div className='mx-auto max-w-6xl h-full w-full'>{children}</div>
    </section>
  )
}

export default Center
