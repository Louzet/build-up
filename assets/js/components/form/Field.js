import React from "react"

const Field = ({ name, label, value, onChange, placeholder = "", required, id, type = "text", error = "", labelClassName = "", checked }) => {

    return (
        <div className="form-group">
            <label htmlFor={name} className={labelClassName}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                id={id ? id : name}
                onChange={onChange}
                className={"form-control " + (error && " is-invalid")}
                required={required}
                checked={type == "radio" & checked == true}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    )
}

export default Field;