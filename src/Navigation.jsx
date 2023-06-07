
import React from 'react';
import { Link, NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';

export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '15px' }}>
			<h1>Welcome!</h1>
			<nav>
				<div
					style={{
						maxWidth: '500px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<NavLink to="/">Home</NavLink>
					<Link to="/rsvp">RSVP</Link>
					<Link to="/story">Our Story</Link>
					<Link to="/gifts">Registry</Link>
				</div>
			</nav>
			<div>{outlet() || <Home/>}</div>
		</div>
	);
};
