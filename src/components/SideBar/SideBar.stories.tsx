// src/components/Sidebar.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "./SideBar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta;

const Template: StoryFn = () => <Sidebar />;

export const Default = Template.bind({});
