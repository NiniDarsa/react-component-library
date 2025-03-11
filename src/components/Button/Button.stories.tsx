import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  onClick:()=>alert("btn")
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'primary',
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  size: 'small',
};

export const Medium= Template.bind({});
Medium.args = {
  children: 'Medium Button',
  size: 'medium',
};
 
export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  size: 'large',
};
