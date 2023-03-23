import React from "react";
import WrapperProps from "types/Wrapper";

const Wrapper = (props: WrapperProps) => {
    const { children } = props;

    return <div>{children}</div>;
};

export default Wrapper;
