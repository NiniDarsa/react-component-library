import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',  
  component: Textarea,          
//   argTypes: {
//     value: { control: 'Time' },  
//   },
} as Meta;

const Template: StoryFn = (args) => <Textarea {...args} rows={args.rowns}/>;

export const Default = Template.bind({});
Default.args={
    rows:4
}

