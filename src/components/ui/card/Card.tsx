import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './Card.module.scss'
import cn from 'classnames'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  const classNames = {
    root: cn(s.root, className),
  }

  return <div ref={ref} className={classNames.root} {...restProps}></div>
})