import {
	createBrowserRouter,
	createHashRouter,
	RouterProvider,
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import BeerBlog from './Components/BeerBlog';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import './Components/Styles/NavBar.css';

export default function App() {
	const router = createHashRouter([
		// {
		// path: '/',
		// element: <NavBar />,
		// children: [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'home',
			element: <Home />,
		},
		{
			path: 'skills',
			element: <Skills />,
		},
		{
			path: 'projects',
			element: <Projects />,
		},
		{
			path: 'contact',
			element: <Contact />,
		},
		{
			path: 'beeerblog',
			element: <BeerBlog />,
		},
		// ],
		// },
	]);
	return (
		<div className='App'>
			<NavBar />
			<div className='outlet-container'>
				<RouterProvider router={router} />
			</div>
			<Footer />
		</div>
	);
}
