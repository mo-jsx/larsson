import React from "react";
import Button from "types/Button";

const SimpleButton = (props: Button) => {
    const { label, type } = props;
    return <button type={type}>{label}</button>;
};

export default SimpleButton;
