import { useState, useCallback, lazy, Suspense } from 'react';
// import FormChild from './FormChild';

const FormChild = lazy(() => import('./FormChild'));

function FormInput() {
	const [input, setInput] = useState('');
	const [count, setCount] = useState(0);

	const incrementCount = useCallback(() => setCount(count + 1), [count]);

	return (
		<>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={incrementCount}>Increment counter</button>

			<h3>Input text: {input}</h3>

			<h3>Count: {count}</h3>
			<hr />
			<Suspense fallback={`loading...`}>
				<FormChild count={count} />
			</Suspense>
		</>
	);
}

export default FormInput;
