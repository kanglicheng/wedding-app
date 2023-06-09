import { ClipboardCopy } from '@patternfly/react-core';

import React from 'react';


export const Home = () => {
	// eslint-disable-next-line no-unused-vars
	return (
		<div>
			<p>
				Thank you for visiting our wedding website. This page contains all the information about our wedding 
				day.
			</p>
			<div style={{margin: "15px"}}>
				<h3>Event Information</h3>
					<h4>Date and Time</h4>
					<p>October 15th, 2023</p>
					<p>
					Ceremony starts at 3:30pm
					</p>
					<p>
					Reception after the ceremony at 5:00pm.
					</p>
					<h4>
						Location 
					</h4>
					<section>
						<p>
							Ceremony: <a href={"https://shakermuseum.org/discover/village-walking-tour/mary-keane-chapel/"}>Mary Keane Chapel</a>
						</p>
						<p>
							Reception: <a href={"https://shakermuseum.org/"}>Shaker Museum</a> in Enfield, NH
						</p>
						<p>
							<b>Address</b> <ClipboardCopy exitDelay={1800} style={{width: "400px", backgroundColor:"lightgoldenrodyellow"}} position={"top-start"} isReadOnly>447 NH Route 4A, Enfield, New Hampshire 03748 </ClipboardCopy>
						</p>
					</section>
					<figure>
						<img src={"https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/shaker.jpeg"}/>
						<figcaption>Shaker Museum, photo taken May 2023</figcaption>
					</figure>
			</div>

			

		</div>
	)
};
