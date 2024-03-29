import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './Checkbox.module.scss'

import { CheckIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id?: string
  label?: string
  position?: PositionType
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    {
      checked,
      onCheckedChange,
      disabled,
      name,
      label,
      id,
      position = 'default',
      className,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const classNames = {
      label: cn(s.label, disabled && s.disabled, className),
      root: cn(s.root),
      checkboxWrapper: cn(s.checkboxWrapper, disabled && s.disabled, s[position]),
      indicator: s.indicator,
    }

    return (
      <Typography className={classNames.label} variant={TypographyVariant.Body2} as="label">
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            ref={ref}
            className={classNames.root}
            id={id}
            name={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={restProps.required}
          >
            {checked && (
              <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                <CheckIcon size={1.8} />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </Typography>
    )
  }
)