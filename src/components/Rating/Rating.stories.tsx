import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Rating from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    maxRating: { control: 'number' },
    initialRating: { control: 'number' },
  },
} as Meta;

const Template: StoryFn = (args) => <Rating {...args}   maxRating={args.maxRating} />;

export const Default = Template.bind({});
Default.args = {
  maxRating: 5,
};


