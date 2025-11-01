import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Mail } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const WithIcon: Story = {
  args: {
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Mail, { className: 'mr-2 h-4 w-4' }),
      ' Login with Email'
    ),
  },
};

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: React.createElement(Mail, { className: 'h-4 w-4' }),
  },
};
