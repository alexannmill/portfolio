import "./Styles/Home.css";
import img from "./imgs/IMG_0528.jpg";
import React from "react";
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ duration: 0.1 }}
		>
			<div className='home'>
				<div className='img-container'>
					<img className='home-bg-img' src={img} alt='profile pic'></img>
				</div>
				<div className='slant'>
					<h1 className='name'>
						<strong className='hi'>Hi, </strong> my name is
					</h1>
					<h1 className='name'>
						{' '}
						<strong>Alex Miller.</strong>
					</h1>
					<h2>Full Stack Developer</h2>
					<br />
					<p className='blurb'>
						Brewer turned Software Developer. I enjoy creating applications that
						have a seamless user experience; maintaining continuity with themes,
						responses, and expectations.
					</p>
				</div>
			</div>
		</motion.div>
	);
}
