interface InputProps {
    label: string;
    name: string;
    id: string;
    type: "text" | "email" | "textarea" | "password" | "phone";
    placeholder: string;
    value: string;
    orientation: "vertical" | "horizontal";

    handleChange: () => {};
}

export default InputProps;
