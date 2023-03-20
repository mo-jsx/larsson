import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    const { label } = props;

    return <button>{label}</button>;
};

export default Button;
