import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'
import { CSSProperties } from 'react'
import { Typography } from '@/components'

const meta = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const contentStyles: CSSProperties = { textAlign: 'center', fontSize: '24px' }


export const Default: Story = {
    args: {
        children: <Typography>Card</Typography>,
        style: {
            width: '300px',
            height: '300px',
            padding: '24px',
        },
    },
}