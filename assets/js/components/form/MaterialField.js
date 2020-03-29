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
	const isInvalid = error
		? 'text-sm leading-tight focus:outline is-invalid'
		: 'text-sm leading-tight focus:outline'

	return (
		<div className="group">
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				id={id ? id : name}
				onChange={onChange}
				className={isInvalid}
				required={required}
				aria-label={name}
			/>
			<span className="highlight" />
			<span className="bar" />
			<label htmlFor={name} className={labelClassName}>
				{label ? label : ''}
			</label>
			{error && <p className="invalid-feedback">{error}</p>}
		</div>
	)
}

export default MaterialField
