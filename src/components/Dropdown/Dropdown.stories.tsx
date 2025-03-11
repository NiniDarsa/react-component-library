import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn = (args) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3>Selected Option: {selectedOption}</h3>
      <Dropdown {...args} onSelect={handleSelect}   label= {args.label}   options= {args.options}/>
    </div>
  );
};

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
};
