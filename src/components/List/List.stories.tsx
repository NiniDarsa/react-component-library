import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import List, { ListProps } from './List';


export default {
  title: 'UI/List',
  component: List,
} as Meta;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
 items:["item1","item2","item3","item4"]
};




