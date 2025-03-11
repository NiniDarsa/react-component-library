import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'Components/Slider',  
  component: Slider,          
  argTypes: {
    value: { control: 'number' },
  },
} as Meta;

const Template: StoryFn = (args) => <Slider {...args} defautValue={args.defaultValue} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 50,  
};

