import React from "react";

const CheckboxField = ({ label, name, handleChange, checked, type = "checkbox" }) => {

    return (
        <div className="form-check">
            <input 
                name={name}
                label={label}
                type={type} 
                className="form-check-input" 
                id={name} 
                onChange={handleChange}
                checked={checked}
            />
            <label className="form-check-label" htmlFor={name}>{label}</label>
        </div>
    );

}

export default CheckboxField;