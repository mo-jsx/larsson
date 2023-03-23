import React from "react";
import InputProps from "types/Inputs";

import "./styles.scss";

const Input = (props: InputProps) => {
    const {
        label,
        type,
        name,
        id,
        placeholder,
        orientation,
        value,
        handleChange,
    } = props;

    return (
        <div className={`input ${orientation}`}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};

export default Input;
