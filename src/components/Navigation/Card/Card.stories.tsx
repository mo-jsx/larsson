import React from "react";
import { Meta, Story } from "@storybook/react";
import Card from "./Card";
import CardProps from "types/Card";

export default {
    title: "Navigation/Card",
    component: Card,
} as Meta;

export const Primary: Story<CardProps> = (args) => <Card {...args} />;
Primary.args = {
    imgSrc: "https://picsum.photos/200/300",
    imgAlt: "Hello World!",
    href: "#",
    title: "Haha !",
    desc: "Lorem ipsum dolor sit amet.",
};

export const LongText: Story<CardProps> = (args) => <Card {...args} />;
LongText.args = {
    imgSrc: "https://picsum.photos/200/300",
    imgAlt: "Hello World!",
    href: "#",
    title: "Haha !",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quo quidem temporibus dignissimos autem obcaecati ad consectetur recusandae doloribus dolore.",
};
