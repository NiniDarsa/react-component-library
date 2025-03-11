import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Carousel from "./Carousel";


export default {
  title: "Components/Carousel",
  component: Carousel,
//   argTypes: {
//     images: { control: 'array' }
//   }
} as Meta;

const Template: StoryFn = (args) => <Carousel {...args} images={args.images}/>;

export const Default = Template.bind({});
Default.args = {
  images: [
    "https://via.placeholder.com/800x300/FF5733/fff?text=Slide+1",
    "https://via.placeholder.com/800x300/33CFFF/fff?text=Slide+2",
    "https://via.placeholder.com/800x300/FFC300/fff?text=Slide+3"
  ],
};
