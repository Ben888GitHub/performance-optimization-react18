import { memo } from 'react';

function FormChild({ count }) {
	console.log('child component is rendering');

	return (
		<>
			<h2>This is a child component.</h2>
			<h4>Count: {count}</h4>
		</>
	);
}

export default memo(FormChild);
