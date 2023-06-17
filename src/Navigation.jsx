
import React from 'react';
import { NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';


export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '8px' }}>
			<div style={{ textAlign:"center", color:"greenyellow"}}>
				<img className={'headerImage'} alt={"header"} src={"https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/personal/frame2%20(1).png?t=2023-06-12T03%3A47%3A49.656Z"}/>
				<h1><a className={'title'} href={"/"}>KANG-LI CHENG & YUE TU</a></h1>
			</div>
			<nav>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center safe',
						columnGap: '10px'
					}}
				>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"} to="/">HOME</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"} to="/story">OUR STORY</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/rsvp">RSVP !</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/gifts">REGISTRY</NavLink>
					<NavLink className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "inactive"}  to="/eventpics">EVENT PICTURES</NavLink>
				</div>
			</nav>
			<>{outlet() || <Home/>}</>
		</div>
	);
};
