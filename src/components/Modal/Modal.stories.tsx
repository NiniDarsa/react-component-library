import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';


export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn = (args) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={handleToggleVisibility}>Toggle Modal</button>
      <Modal {...args} visible={isVisible} onClick={handleToggleVisibility}>
        <h2>Modal Content</h2>
        <p>This is a sample modal. Click the "Close" button or outside to close it.</p>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
};
