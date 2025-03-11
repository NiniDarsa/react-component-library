import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TimePicker from './TimePicker';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
} as Meta;

const Template: StoryFn = () => <TimePicker />;

export const DefaultTimePicker = Template.bind({});
