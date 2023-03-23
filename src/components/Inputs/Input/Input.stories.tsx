import React from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./Input";
import InputProps from "types/Inputs";

export default {
    title: "CTA/Inputs",
    component: Input,
} as Meta<InputProps>;

export const TextInput: Story<InputProps> = (args) => <Input {...args} />;
TextInput.args = {
    label: "Text:",
    name: "text",
    id: "text",
    type: "text",
    placeholder: "Tap your text here...",
    orientation: "vertical",
};
