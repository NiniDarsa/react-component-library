import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';


export default {
  title: 'UI/Spinner',
  component: Spinner,
} as Meta;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size:100
};




