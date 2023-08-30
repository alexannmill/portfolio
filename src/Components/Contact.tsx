import React from "react";
import ContactForm from "./ContactForm";
import "./Styles/Contact.css";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ duration: 0.1 }}
		>
			<div className='contact'>
				<div className='contact-form'>
					<h1>Have a question?</h1>
					<ContactForm />
				</div>
			</div>
		</motion.div>
	);
}

