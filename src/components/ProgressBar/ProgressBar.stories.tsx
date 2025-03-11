import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';


export default {
  title: 'UI/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage:20
};




