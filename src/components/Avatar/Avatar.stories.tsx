import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} size={args.size} alt={args.alt}/>;

export const Default = Template.bind({});
Default.args = {
  size:100,
  alt:"img of a girl"
};







