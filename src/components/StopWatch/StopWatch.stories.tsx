import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import StopWatch from './StopWatch';


export default {
  title: 'UI/StopWatch',
  component: StopWatch,
} as Meta;

const Template: StoryFn = (args) => <StopWatch {...args} />;

export const Default = Template.bind({});





