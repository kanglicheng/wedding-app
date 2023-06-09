
import React from 'react';
import { NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';

export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '15px' }}>
			<h1>Welcome!</h1>
			<h3><a style={{textDecoration: "none", color: "black"}} href={"/"}>Kang-Li Cheng and Yue Tu&apos;s Wedding</a></h3>
			<nav>
				<div
					style={{
						maxWidth: '650px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""} to="/">Home</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""} to="/story">Our Story</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""} to="/rsvp">RSVP !</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""} to="/gifts">Registry</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""} to="/eventpics">Event Pictures</NavLink>
				</div>
			</nav>
			<div>{outlet() || <Home/>}</div>
		</div>
	);
};
