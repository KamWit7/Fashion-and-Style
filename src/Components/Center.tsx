import React from 'react'
import { twMerge } from 'tailwind-merge'

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
    <section className={twMerge(bg || 'bg-white', 'px-4 md:px-28', className)}>
      <div className='mx-auto max-w-6xl h-full'>{children}</div>
    </section>
  )
}

export default Center
