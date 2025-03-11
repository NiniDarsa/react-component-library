import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormValidation from './FormValidation';

export default {
  title: 'Components/FormValidation',  
  component: FormValidation,        
} as Meta;

const Template: StoryFn = (args) => <FormValidation {...args} />;

export const Default = Template.bind({});
