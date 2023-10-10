import classNames from 'classnames'
import { PropsWithChildren, createElement, useMemo } from 'react'
import { Link, To } from 'react-router-dom'

type Variants = 'fill' | 'stroke' | 'text'
type Size = 'M' | 'L'
type Element = 'button' | 'Link' | 'a'

type LinkProps<K extends Element> = K extends 'Link'
  ? { element: 'Link'; to: To; href?: never }
  : K extends 'a'
  ? { element: 'a'; to?: never; href: string }
  : { element?: 'button'; to?: never; href?: never }

type TagProps = {
  Link: Omit<React.ComponentProps<typeof Link>, 'to'>
  button: React.ButtonHTMLAttributes<HTMLButtonElement>
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

type ButtonProps<K extends Element> = {
  variant?: Variants
  size?: Size
  className?: string
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
} & LinkProps<K> &
  TagProps[K]

const Button = <K extends Element>({
  className,
  variant = 'fill',
  size = 'L',
  children,
  iconBefore,
  iconAfter,
  element = 'button',
  to,
  ...rest
}: PropsWithChildren<ButtonProps<K>>) => {
  const classes = useMemo(() => {
    const variantClasses = {
      fill: [
        'bg-primary-600 text-white',
        'hover:bg-primary-700',
        'disabled:bg-gray',
      ],
      stroke: [
        'border-primary-600 border text-primary-600',
        'hover:border-primary-700 hover:text-primary-700',
        'disabled:bg-gray',
      ],
      text: ['text-primary-600', 'hover:text-primary-700', 'disabled:bg-gray'],
    }[variant]

    const sizeClasses = {
      L: ['min-w-[202px] py-[9.5px]'],
      M: ['min-w-[184px] py-2'],
    }[size]

    return [...variantClasses, ...sizeClasses]
  }, [size, variant])

  const childrenComponent = (
    <>
      <div className='pr-1'>{iconBefore && iconBefore}</div>
      {children}
      <div className='pl-1'>{iconAfter && iconAfter}</div>
    </>
  )

  if (to) {
    return (
      <Link
        className={classNames(classes, 'px-4 flex-center', className)}
        to={to}>
        {childrenComponent}
      </Link>
    )
  }

  return createElement(
    element,
    {
      className: classNames(classes, 'px-4 flex-center', className),
      ...rest,
    },
    childrenComponent
  )
}

export default Button
