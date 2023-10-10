import classNames from 'classnames'
import React from 'react'

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
    <section className={classNames(bg || 'bg-white', 'px-28', className)}>
      <div className='mx-auto max-w-6xl'>{children}</div>
    </section>
  )
}

export default Center
