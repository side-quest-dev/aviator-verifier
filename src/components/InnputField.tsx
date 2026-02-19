import React from "react";
import type { InputFieldProps } from "../types";

const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    onKeyDown,
    placeholder
}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input 
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