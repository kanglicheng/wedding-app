
import React from 'react';
import { NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';

export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '15px' }}>
			<div style={{ textAlign:"center", color:"greenyellow"}}>
				<h1><a style={{textDecoration: "none", color:"#4e4d52"}} href={"/"}>Kang-Li Cheng and Yue Tu&apos;s Wedding</a></h1>
			</div>
			<nav>
				<div
					style={{
						maxWidth: '650px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"} to="/">Home</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"} to="/story">Our Story</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/rsvp">RSVP !</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/gifts">Registry</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/eventpics">Event Pictures</NavLink>
				</div>
			</nav>
			<div>{outlet() || <Home/>}</div>
		</div>
	);
};
