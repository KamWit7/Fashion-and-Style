import { twMerge } from 'tailwind-merge'
import { PropsWithChildren, createElement, useMemo } from 'react'
import { Link, To } from 'react-router-dom'
import {
  sizeClasses,
  variantClasses,
  variantClassesDark,
} from '@components/Button/styles'

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
  invertOnDark?: boolean
} & LinkProps<K> &
  TagProps[K]

const Button = <K extends Element>({
  className,
  variant = 'fill',
  size = 'M',
  invertOnDark = true,
  children,
  iconBefore,
  iconAfter,
  element = 'button',
  to,
  ...rest
}: PropsWithChildren<ButtonProps<K>>) => {
  const classes = useMemo(
    () => [
      ...variantClasses[variant],
      ...(invertOnDark ? variantClassesDark[variant] : []),
      ...sizeClasses[size],
    ],
    [variant, invertOnDark, size]
  )

  const cN = twMerge(classes, 'px-4 flex-center', className)

  const childrenComponent = (
    <>
      <div className='pr-1'>{iconBefore && iconBefore}</div>
      {children}
      <div className='pl-1'>{iconAfter && iconAfter}</div>
    </>
  )

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
