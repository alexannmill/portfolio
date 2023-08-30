import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import BeerBlog from './Components/BeerBlog';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import './Components/Styles/NavBar.css';

export default function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='outlet-container'>
				<Router>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/beerblog' element={<BeerBlog />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Router>
			</div>
			<Footer />
		</div>
	);
}
