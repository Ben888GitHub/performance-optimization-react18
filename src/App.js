import { Suspense, lazy } from 'react';
import './App.css';
import { FormInput, LazyImage } from './components/index';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/code-splitting-router/Home'));
const About = lazy(() => import('./components/code-splitting-router/About'));

const image = {
	src: `https://source.unsplash.com/random`,
	alt: `Random image`,
	height: 300,
	width: 400,
	caption: `Random image`
};

function App() {
	return (
		<div className="App">
			<h1>React App Performance Optimization Hacks</h1>
			<FormInput />

			<Suspense fallback={<p>Loading page...</p>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</Suspense>
			<br />

			<LazyImage image={image} />
		</div>
	);
}

export default App;
