import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: StoryFn = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={args.totalPages}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
};
