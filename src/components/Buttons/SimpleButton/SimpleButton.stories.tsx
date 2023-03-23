import React from "react";
import { Meta, Story } from "@storybook/react";
import SimpleButton from "./SimpleButton";
import ButtonProps from "types/Button";

export default {
    title: "CTA/Buttons/Simple Button",
    component: SimpleButton,
} as Meta<ButtonProps>;

export const Primary: Story<ButtonProps> = (args) => <SimpleButton {...args} />;
Primary.args = {
    label: "Button",
    type: "button",
};
