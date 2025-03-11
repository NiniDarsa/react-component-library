import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Clock from './Clock';

export default {
  title: 'Components/Clock',
  component: Clock,
} as Meta;

const Template: StoryFn = () => (
  <Clock />
);

export const DefaultClock = Template.bind({});

