import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: StoryFn = () => <DatePicker />;

export const DefaultDatePicker = Template.bind({});
