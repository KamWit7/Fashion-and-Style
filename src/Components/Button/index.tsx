import { twMerge } from 'tailwind-merge'
import { PropsWithChildren, createElement, useMemo } from 'react'
import { Link, To } from 'react-router-dom'
import { sizeClasses, variantClasses } from '@components/Button/styles'

export type Variants = 'fill' | 'stroke' | 'text'
export type Size = 'M' | 'L'
export type Element = 'button' | 'Link' | 'a'

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

export type ButtonProps<K extends Element> = {
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
  const classes = useMemo(
    () => [...variantClasses[variant], ...sizeClasses[size]],
    [variant, size]
  )

  const childrenComponent = (
    <>
      <div className='pr-1'>{iconBefore && iconBefore}</div>
      {children}
      <div className='pl-1'>{iconAfter && iconAfter}</div>
    </>
  )

  const cN = twMerge(classes, 'px-4 flex-center', className)

  if (to) {
    return (
      <Link className={cN} to={to}>
        {childrenComponent}
      </Link>
    )
  }

  return createElement(
    element,
    {
      className: cN,
      ...rest,
    },
    childrenComponent
  )
}

export default Button
