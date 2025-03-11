import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
    const [value, setValue] = useState('');
  
    return <Input {...args} value={value} onChange={(e)=>setValue(e.target.value)} />;
  };

export const Default = Template.bind({});
  Default.args = {
    type:"text",
    label: 'Username',
    placeholder: 'Enter your username',
  };
  
export const WithError = Template.bind({});
  WithError.args = {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  };
  
export const Checkbox = Template.bind({});
Checkbox.args = {
  type:"checkbox",
  label:"checkbox"
};

export const Radio = Template.bind({});
Radio.args = {
  type:"radio",
  label:"radio"
};

export const Password = Template.bind({});
Password.args = {
  type:"password"
};

export const Disabled = Template.bind({});
Disabled.args = {
  type:"text",
  disabled:true
};





