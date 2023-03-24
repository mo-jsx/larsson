import React from "react";
import { Meta, Story } from "@storybook/react";
import Breadcumber from "./Breadcumber";
import { BreadcumberProps } from "types/";

export default {
    title: "Navigation/Breadcumber",
    component: Breadcumber,
} as Meta<BreadcumberProps[]>;

export const Primary: Story<BreadcumberProps[]> = (args) => (
    <Breadcumber {...args} />
);
Primary.args = {
    links: [
        { title: "Hello", link: "/hello" },
        { title: "Hi", link: "/hi" },
    ],
};
