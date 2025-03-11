import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: StoryFn = (args) => <Tabs {...args}  items={args.items}/>;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Tab 1", content: "Content of Tab 1" },
    { label: "Tab 2", content: "Content of Tab 2" },
    { label: "Tab 3", content: "Content of Tab 3" },
  ],
};
