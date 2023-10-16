import { cn } from '@utils/cn'
import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useMemo,
} from 'react'

type VariantTypeMap = {
  h0: 'h1'
  h1: 'h1'
  h2: 'h2'
  h3: 'h3'
  h4: 'h4'
  h5: 'h5'
  h6: 'h6'
  p1: 'p'
  p2: 'p'
  b1: 'p'
  b2: 'p'
  label1: 'p'
  label2: 'p'
}

type Variants = keyof VariantTypeMap
type VariantsTags = VariantTypeMap[Variants]

interface TagProps {
  tag: VariantsTags
  classes: string
}

type TextProps<T extends ElementType, V extends Variants> = {
  variant: V
  component?: T
  children: ReactNode | ReactNode[] | string
  className?: string
}
const getVariantClasses = (variant: Variants): TagProps => {
  switch (variant) {
    case 'h1':
      return {
        classes:
          'text-40 md:text-80 font-heading tracking-paragraph font-medium',
        tag: 'h1',
      }
    case 'h2':
      return {
        classes:
          'text-32 md:text-56 font-heading tracking-paragraph font-medium',
        tag: 'h2',
      }
    case 'h3':
      return {
        classes: 'text-20 md:text-32 font-bold', // +
        tag: 'h3',
      }
    case 'h4':
      return {
        classes: 'text-40 font-heading tracking-paragraph font-medium',
        tag: 'h4',
      }
    case 'h5':
      return {
        classes: 'text-14 md:text-20 font-montserrat font-bold', //+
        tag: 'h5',
      }
    case 'h6':
      return {
        classes: 'text-14 md:text-16 font-montserrat font-bold',
        tag: 'h6',
      }
    case 'p1':
      return {
        classes: 'text-20 md:text-32 font-montserrat', // +
        tag: 'p',
      }
    case 'p2':
      return { classes: 'text-20 md:text-24 font-sans', tag: 'p' }
    case 'b1':
      return {
        classes: 'text-16 md:text-18 font-monsarrat ',
        tag: 'p',
      } // +
    case 'b2':
      return {
        classes: 'text-14 md:text-16 font-montserrat font-normal',
        tag: 'p',
      } // +
    case 'label1':
      return {
        classes: 'text-10 md:text-14 font-montserrat text-primary-100',
        tag: 'p',
      }
    case 'label2':
      return { classes: 'text-8 font-sans', tag: 'p' }
    default:
      return { tag: 'p', classes: '' }
  }
}

const Text = <V extends Variants, K extends ElementType = VariantTypeMap[V]>({
  variant,
  component,
  children,
  className,
  ...p
}: TextProps<K, V> &
  Omit<ComponentPropsWithoutRef<K>, keyof TextProps<K, V>>) => {
  const props = useMemo(() => getVariantClasses(variant), [variant])

  const Tag = component ? component : props.tag

  return (
    <Tag className={cn(props.classes, className)} {...p}>
      {children}
    </Tag>
  )
}

export default Text
