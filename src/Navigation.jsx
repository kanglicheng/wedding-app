
import React from 'react';
import { NavLink, useOutlet } from 'react-router-dom';
import { Home } from './Home';


export const Navigation = () => {
	const outlet = useOutlet;
	return (
		<div style={{ margin: '15px' }}>
			<div style={{ textAlign:"center", color:"greenyellow"}}>
				<img className={'headerImage'} alt={"header"} src={"https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/dartmouth-kccheng.jpeg"}/>
				<h1><a style={{textDecoration: "none", color:"#4e4d52", fontWeight: "400", letterSpacing: "8px", lineHeight: "1", fontSize: "48px", fontFamily:'Nanum Myeongjo'  }} href={"/"}>KANG-LI CHENG & YUE TU</a></h1>
			</div>
			<nav>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						columnGap: '12px'
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
			<div>{outlet() || <Home/>}</div>
		</div>
	);
};
