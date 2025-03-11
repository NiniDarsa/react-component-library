import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: StoryFn = (args) => {
  const [checked, setChecked] = useState(false);
  return <Toggle {...args} onChange={setChecked} checked={checked}/>;
};

export const DefaultToggle = Template.bind({});
DefaultToggle.args = {
  checked: false,
};
export const TrueToggle = Template.bind({});
TrueToggle.args = {
  checked: true,
};
