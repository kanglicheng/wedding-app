import { ClipboardCopy } from '@patternfly/react-core';

import React from 'react';


export const Home = () => {
	// eslint-disable-next-line no-unused-vars
	return (
		<div style={{margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px"}}>
			<h2>Welcome!</h2>
			<div style={{maxWidth: "35em"}}>
				<p style={{textAlign: "center"}}>
					Thank you for visiting Yue and Kang-Li&apos;s wedding website. This page contains all the information about our wedding 
					day. Please <a href={'/rsvp'}>RSVP</a> should you be interested in attending!
				</p>
			</div>
			
			<div style={{margin: "auto"}}>
				<h2>Event Information</h2>
					<h3>Date and Time</h3>
					<p><b>Sunday, October 15th, 2023</b></p>
					<p>
					Ceremony starts at 3:45pm
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
							<b>Address</b> 
							<div>
							<ClipboardCopy hoverTip={'Click to copy!'} exitDelay={2000} style={{width: "400px", backgroundColor:"lightgoldenrodyellow"}} position={"top-start"}isReadOnly>
									447 NH Route 4A, Enfield, New Hampshire 03748 
							</ClipboardCopy>
							</div>
	
					</section>
					<figure>
						<img className={"image"} src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/shaker1.jpeg?t=2023-06-17T00%3A57%3A48.081Z"/>
						<figcaption>
							Shaker Museum, photo taken June 15th, 2023
						</figcaption>
					</figure>
			</div>

			

		</div>
	)
};
