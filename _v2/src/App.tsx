import React, { ReactElement } from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface RouteConfig {
	path: string;
	element: ReactElement;
}

const routes: RouteConfig[] = [
	{ path: '/', element: <div>Home Page</div> },
	{ path: '/about', element: <div>About Page</div> },
];

const App: React.FC = () => {
	return (
		<div className='App'>
			{/* <NavBar /> */}
			<div className='outlet-container'>
				<AnimatePresence mode='wait'>
					<Router>
						<Routes>
							{routes.map((route, index) => (
								<Route key={index} path={route.path} element={route.element} />
							))}
						</Routes>
					</Router>
				</AnimatePresence>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
