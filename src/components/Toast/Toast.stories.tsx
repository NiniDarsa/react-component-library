import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toast } from "..";


export default {
  title: "Components/Toast",
  component:Toast,
} as Meta;

const Template: StoryFn = (args) => <Toast {...args} message={args.message}/>;

export const Default = Template.bind({});
Default.args = {
message:"toast message"
};


