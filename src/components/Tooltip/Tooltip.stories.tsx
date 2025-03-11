import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'hello there',
  text:"greeting",
  position:"top"
};

export const RightTooltip= Template.bind({});
RightTooltip.args = {
  text: 'This is a right tooltip',
  children: 'hello there',
  position: 'right',
};

export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
  text: 'This is a bottom tooltip',
  children: 'hello there',
  position: 'bottom',
};

export const LeftTooltip = Template.bind({});
LeftTooltip.args = {
  text: 'This is a left tooltip',
  children: 'hello there',
  position: 'left',
};







