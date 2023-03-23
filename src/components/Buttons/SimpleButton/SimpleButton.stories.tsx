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
    label: "Primary Button",
    type: "button",
    variant: "primary",
};

export const Secondary: Story<ButtonProps> = (args) => (
    <SimpleButton {...args} />
);
Secondary.args = {
    label: "Secondary Button",
    type: "button",
    variant: "secondary",
};

export const Danger: Story<ButtonProps> = (args) => <SimpleButton {...args} />;
Danger.args = {
    label: "Danger Button",
    type: "button",
    variant: "danger",
};

export const Success: Story<ButtonProps> = (args) => <SimpleButton {...args} />;
Success.args = {
    label: "Success Button",
    type: "button",
    variant: "success",
};
