
import React from 'react';
import { Chrono } from "react-chrono";
const items = [
	{ title: 'September 2016', cardTitle: 'First time meeting', media: {
		name: "",
		source : {
			url: "images/p1.png"
		},
		type: "IMAGE"
	} },
	{ title: 'Timeline title 2', cardTitle: 'Card Title 2' },
  ];
export const Story = () => {
	return (
		<>
		<h2>Our Story in Pictures</h2>
		<div style={{ width: '500px', height: '950px' }}>
		<Chrono items={items} mode="VERTICAL_ALTERNATING" />
		</div>
		</>
	);
};
