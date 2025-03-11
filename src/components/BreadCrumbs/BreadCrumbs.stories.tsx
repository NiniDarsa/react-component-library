import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from './BreadCrumbs';

export default {
  title: 'UI/BreadCrumbs',
  component: Breadcrumbs,
} as Meta;


const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default= Template.bind({});
Default.args = {
 items:["item1","item2","item3","item4","item"]
};









