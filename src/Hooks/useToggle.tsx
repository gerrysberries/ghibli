import React from 'react';

function useToggle(initialValue: boolean = false): [boolean, () => void] {
	const [value, setValue] = React.useState(initialValue);

	function toggleValue() {
		setValue(currentValue => !currentValue);
	}

	return [value, toggleValue];
}

export default useToggle;
