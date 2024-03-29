/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Styles/Skills.css";
import { motion } from 'framer-motion';

export default function Home() {
	const backend = [
		'SQL',
		'Node.js',
		'Javascript',
		'Typescript',
		'Ruby',
		'Express',
	];
	const frontend = [
		'Javascript',
		'Typescript',
		'React',
		'HTML',
		'CSS',
		'jQuery',
	];

	const webDesign = [
		'Figma',
		'Canva',
		'Tailwind',
		'Bootstrap',
		'ERDs',
		'Responsive',
	];
	const strategies = ['Agile', 'Git', 'Testing', 'Documentation'];

	const renderFrontend = frontend.map((skill, i) => {
		return (
			<div className='skill' key={skill + i}>
				<h3>{skill}</h3>
			</div>
		);
	});
	const renderWebDesign = webDesign.map((skill, i) => {
		return (
			<div className='skill' key={skill + i}>
				<h3>{skill}</h3>
			</div>
		);
	});
	const renderBackend = backend.map((skill, i) => {
		return (
			<div className='skill' key={skill + i}>
				<h3>{skill}</h3>
			</div>
		);
	});

	const renderStrategies = strategies.map((skill, i) => {
		return (
			<div className='skill' key={skill + i}>
				<h3>{skill}</h3>
			</div>
		);
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ duration: 0.1 }}
		>
			<div className='skills'>
				<h1 className='skill-set-title'>
					<strong>SKILL SET</strong>
				</h1>
				<div className='skill-list'>
					<div className='set'>
						<div className='list'>
							<h2>// Front-end : </h2>
							{renderFrontend}
						</div>
						<div className='list'>
							<h2>// Back-end :</h2>
							{renderBackend}
						</div>
					</div>
					<div className='set'>
						<div className='list'>
							<h2>// Web Design :</h2>
							{renderWebDesign}
						</div>
						<div className='list'>
							<h2>// Strategies : </h2>
							{renderStrategies}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
