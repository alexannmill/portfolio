import React from 'react';
import './Styles/Contact.css';

export default function Contact() {
	return (
		<div className='footer'>
			<div className='socials'>
				<a href='https://www.linkedin.com/in/alexannmill/' target='blank'>
					<img
						src='https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
						alt='Alex Miller LinkedIn'
						height='30'
						width='30'
					/>
				</a>
				<a href='https://github.com/alexannmill' target='blank'>
					<img
						src='https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg'
						alt='Alex Miller Github'
						height='30'
						width='30'
					/>
				</a>
			</div>
		</div>
	);
}
