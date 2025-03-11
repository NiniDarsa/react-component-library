import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card. It can contain any content.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  description: 'This card includes an image at the top.',
  imgUrl: 'https://via.placeholder.com/150',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  description: 'This card includes action buttons below the description.',
  actions: <button>Action</button>,
};
