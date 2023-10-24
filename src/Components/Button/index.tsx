import { twMerge } from 'tailwind-merge';
import { PropsWithChildren, createElement, useMemo } from 'react';
import { Link, To } from 'react-router-dom';
import { sizeClasses, variantClasses, variantClassesDark } from '@components/Button/styles';
import { cn } from '@utils/cn';

export type Variants = 'fill' | 'stroke' | 'text';
export type Size = 'M' | 'L';
export type Element = 'button' | 'Link' | 'a';

type ElementProps =
  | (Omit<React.ComponentProps<typeof Link>, 'to'> & {
      element: 'Link';
      to: To;
      href?: never;
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      element: 'a';
      to?: never;
      href: string;
    })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      element?: 'button';
      to?: never;
      href?: never;
    });

export type ButtonProps = {
  variant?: Variants;
  size?: Size;
  className?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  invertOnDark?: boolean;
} & ElementProps;

const Button = ({
  className,
  variant = 'fill',
  size = 'M',
  invertOnDark = false,
  children,
  iconBefore,
  iconAfter,
  element = 'button',
  to,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const classes = useMemo(
    () => [...variantClasses[variant], ...(invertOnDark ? variantClassesDark[variant] : []), ...sizeClasses[size]],
    [variant, invertOnDark, size]
  );

  const cN = twMerge(classes, 'px-4 flex items-center justify-between', className);

  const childrenComponent = (
    <>
      <span className={cn(children && 'pr-1')}>{iconBefore && iconBefore}</span>
      {children}
      <span className={cn(children && 'pl-1')}>{iconAfter && iconAfter}</span>
    </>
  );

  if (to) {
    return (
      <Link className={cN} to={to}>
        {childrenComponent}
      </Link>
    );
  }

  return createElement(
    element,
    {
      className: cN,
      ...rest,
    },
    childrenComponent
  );
};

export default Button;
