import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'
import { ButtonVariant } from '@/common'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: Object.values(ButtonVariant),
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: ButtonVariant.primary,
        children: 'Primary Button',
        disabled: false,
    },
}

// export const Secondary: Story = {
//     args: {
//         variant: 'secondary',
//         children: 'Secondary Button',
//         disabled: false,
//     },
// }

// export const FullWidth: Story = {
//     args: {
//         variant: 'primary',
//         children: 'Full Width Button',
//         disabled: false,
//         fullWidth: true,
//     },
// }

// export const AsLink: Story = {
//     args: {
//       variant: 'primary',
//       children: 'Link that looks like a button',
//       as: 'a',
//     },
//   }