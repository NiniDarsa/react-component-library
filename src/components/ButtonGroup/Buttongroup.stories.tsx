import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonGroup from './ButtonGroup';


export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: StoryFn = (args) => {
  const [selected, setSelected] = useState('');

  const handleButtonClick = (button: string) => {
    setSelected(button);
  };

  return (
    <>
      <p>Selected button: {selected}</p> 
      <ButtonGroup {...args} onClick={handleButtonClick} buttons={args.buttons} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttons: ['Button 1', 'Button 2', 'Button 3'],
};
