import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Typography.module.scss'
import cn from 'classnames'
import { TypographyVariant } from '@/common/enums'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariant,
  children?: ReactNode,
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  variant = TypographyVariant.Body1,
  className,
  as,
  ...restProps
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>): JSX.Element => {
  const Component = as || 'p'

  const typographyClasses = cn(s[variant], className)

  return <Component className={typographyClasses} {...restProps} />
}