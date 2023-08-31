import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import BeerBlog from './Components/BeerBlog';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import './Components/Styles/NavBar.css';
import { AnimatePresence } from 'framer-motion';

export default function App() {
	// const router = createBrowserRouter([
	// 	{
	// 		path: '/',
	// 		element: <NavBar />,
	// 		children: [
	// 			{
	// 				path: '',
	// 				element: <Home />,
	// 			},
	// 			{
	// 				path: 'skills',
	// 				element: <Skills />,
	// 			},
	// 			{
	// 				path: 'projects',
	// 				element: <Projects />,
	// 			},
	// 			{
	// 				path: 'contact',
	// 				element: <Contact />,
	// 			},
	// 			// {
	// 			// 	path: 'beeerblog',
	// 			// 	element: <BeerBlog />,
	// 			// },
	// 		],
	// 	},
	// ]);
	return (
		<div className='App'>
			<NavBar />
			<div className='outlet-container'>
				<AnimatePresence mode='wait'>
					<Router basename='/portfolio'>
						<Routes>
							<Route path='/portfolio/' element={<Home />} />
							<Route path='/portfolio/skills' element={<Skills />} />
							<Route path='/portfolio/projects' element={<Projects />} />
							<Route path='/portfolio/beerblog' element={<BeerBlog />} />
							<Route path='/portfolio/contact' element={<Contact />} />
						</Routes>
					</Router>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
}
