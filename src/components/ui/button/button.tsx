import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Button.module.scss'
import { ButtonVariant } from '@/common'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
  ) => {
  const { variant = ButtonVariant.primary, fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}

