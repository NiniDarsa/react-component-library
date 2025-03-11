import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AccordionGroup, { AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: AccordionGroup,
} as Meta;

const Template: StoryFn<{ items: AccordionProps[] }> = (args) => <AccordionGroup {...args} items={args.items} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: "Item 1", content: "This is the content of item 1." },
    { title: "Item 2", content: "This is the content of item 2." },
    { title: "Item 3", content: "This is the content of item 3." },
  ],
};
