import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Components/Table',  
  component: Table,         
} as Meta;

const Template: StoryFn = (args) => <Table {...args} headers={args.headers}
data={[
  { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
  { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
  { Name: 'Sam Brown', Age: 22, Email: 'sam@example.com' },
]} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
    { Name: 'Sam Brown', Age: 22, Email: 'sam@example.com' },
  ],
};

export const LargeDataSet = Template.bind({});
LargeDataSet.args = {
  headers: ['Name', 'Age', 'city'],
  data: [
    { Name: 'John Doe', Age: 30, city: 'New York' },
    { Name: 'Jane Smith', Age: 25, city: 'Los Angeles' },
    { Name: 'Sam Brown', Age: 22, city: 'Chicago' },
    { Name: 'Anna Green', Age: 28, city: 'Tbilisi' },
    { Name: 'Paul Blue', Age: 35, city: 'Dallas' },
    { Name: 'Sue White', Age: 40, city: 'Toronto' },
  ],
};
