import React, { Children } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'UI/Badge',
  component: Badge,
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default= Template.bind({});
Default.args = {
  size:50,
  variant:"warning",
  children:"Default"
};

export const Success= Template.bind({});
Success.args = {
  size:50,
  variant:"success",
  children:"Success"
};

export const Error = Template.bind({});
Error.args = {
  size:50,
  variant:"error",
  children:"error"
};







