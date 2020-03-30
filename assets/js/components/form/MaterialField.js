import React from 'react'

require('../../../css/components/MaterialField.css')

const MaterialField = ({
	name,
	label,
	value,
	onChange,
	placeholder = '',
	required,
	id,
	type = 'text',
	error = '',
	labelClassName = '',
}) => {
	const isInvalid = error ? 'text-sm leading-tight is-invalid' : 'text-sm leading-tight'

	return (
		<div className="md-input-box">
			<input
				id={id ? id : name}
				name={name}
				type={type}
				label={label}
				className={isInvalid + ' md-input'}
				placeholder=" "
				required={required}
				onChange={onChange}
				value={value}
			/>
			<label htmlFor={id ? id : name} className="md-label">
				{label}
			</label>
			<div className="md-input-underline" />
			{error && <p className="invalid-feedback">{error}</p>}
		</div>
	)
}

export default MaterialField
