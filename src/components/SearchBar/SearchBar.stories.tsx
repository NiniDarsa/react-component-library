import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
//   argTypes: {
//     onSearch: { action: "searched" },
//   },
} as Meta;

const Template: StoryFn = (args) => <SearchBar {...args} onSearch={args.onSearch}  placeholder={args.placeholder}/>;

export const Default = Template.bind({});
Default.args = {
  onSearch: (text: string) => console.log("Search query:", text),
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    onSearch: (text: string) => console.log("Search query:", text),
    placeholder: "Search for products...",
};
