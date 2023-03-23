import React from "react";
import { Meta, Story } from "@storybook/react";
import SimpleButton from "./SimpleButton";

export default {
    title: "CTA/Buttons/Simple Button",
    component: SimpleButton,
} as Meta;

export const Primary: Story = (args) => <SimpleButton {...args} />;
Primary.args = {
    label: "Button",
};
