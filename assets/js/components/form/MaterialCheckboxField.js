import React from 'react'

require('../../../css/components/MaterialCheckboxField.css')

const MaterialCheckboxField = ({ label, name, id, checked, onChange }) => {
	return (
		<label
			className="select-none text-sm container block relative cursor-pointer pl-8"
			htmlFor={id}
		>
			{label}
			<input
				className="absolute opacity-0 left-0 top-0 cursor-pointer"
				type="checkbox"
				id={id}
				onChange={onChange}
				checked={checked}
				name={name}
			/>
			<span className="h-6 w-6 checkmark rounded absolute top-0 left-0 bg-gray-400" />
		</label>
	)
}

export default MaterialCheckboxField
