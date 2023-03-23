import React from "react";
import { Wrapper } from "../../../utils";
import Button from "types/Button";
import "./styles.scss";

const SimpleButton = (props: Button) => {
    const { label, type, variant } = props;
    return (
        <Wrapper>
            <button className={`btn ${variant}`} type={type}>
                {label}
            </button>
        </Wrapper>
    );
};

export default SimpleButton;
