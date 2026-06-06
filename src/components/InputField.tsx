import React from "react";
import type { InputFieldProps } from "../types";

const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    onKeyDown,
    placeholder
}) => {
    const id = React.useId();

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
             />
        </div>
    );
};

export default InputField;