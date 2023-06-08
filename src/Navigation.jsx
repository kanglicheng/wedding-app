
import React from 'react';
import { Link, NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';

export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '15px' }}>
			<h1>Welcome!</h1>
			<h3>Kang-Li Cheng and Yue Tu&apos;s Wedding</h3>
			<nav>
				<div
					style={{
						maxWidth: '500px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<NavLink to="/">Home</NavLink>
					<Link to="/story">Our Story</Link>
					<Link to="/rsvp">RSVP !</Link>
					<Link to="/gifts">Registry</Link>
					<Link to="/eventpics">Event Pictures</Link>
				</div>
			</nav>
			<div>{outlet() || <Home/>}</div>
		</div>
	);
};
