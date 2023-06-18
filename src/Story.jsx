
import React from 'react';
import { Chrono } from 'react-chrono';
const items = [
	{
		"title": "October 1992",
		"cardTitle": "Kang-Li's first birthday",
		"cardSubtitle": "Kang-Li was born in Pennsylvania",
		"cardDetailedText": "The first child of Chi-Yang and Shue-Fan, he was a calm and quiet child."
	},
	{
		"title": "August 1994",
		"cardTitle": "Yue's first birthday",
		"cardSubtitle": "Yue Tu was born in Jiangxi and then grew up in Beijing",
		"cardDetailedText": "The only child of the Tu family and described by adults as the 'cutest child ever'!"
	},
	{
		"title": "September 2016",
		"cardTitle": "Kang-Li and Yue meet for the first time",
		"media": {
			"name": "Columbia University, Mailman",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/personal/columbia_sept_2016.jpeg?t=2023-06-12T03%3A45%3A30.565Z"
			},
			"type": "IMAGE"
		},
		
	},
	{
		"title": "May 2018",
		"cardTitle": "First reunion",
		"media": {
			"name": "Manhattan, NY",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/wang_may_2018.jpeg?t=2023-06-12T03%3A13%3A35.248Z"
			},
			"type": "IMAGE"
		},
		
	},
	{
		"title": "September 2020",
		"cardTitle": "Second runion!",
		"media": {
			"name": "Broadway",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/personal/IMG_4577.jpeg"
			},
			"type": "IMAGE"
		},
		
	},
	{
		"title": "October 2020",
		"cardTitle": "First date at Santa Monica",
		"media": {
			"name": "Santa Monica",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/B873B3B1-6CBC-444B-B945-B201DB4FC889.JPG"
			},
			"type": "IMAGE"
		},
		
	}
	,{
		"title": "July 2021",
		"cardTitle": "Hiking at the Potato Chip",
		"media": {
			"name": "Potato Chip",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/personal/potato_chip_july_2021.jpeg?t=2023-06-12T03%3A46%3A57.521Z"
			},
			"type": "IMAGE"
		},
		
	}	
	,{
		"title": "December 2021",
		"cardTitle": "Visit NY/NJ",
		"media": {
			"name": "NY/NJ",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/steve_dec_2021.jpeg"
			},
			"type": "IMAGE"
		},
		
	}	
	,{
		"title": "January 2022",
		"cardTitle": "First day in 2022",
		"media": {
			"name": "First day",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/18BB0EB6-B9A6-4859-B9F1-3D5CE5836FB1.JPG"
			},
			"type": "IMAGE"
		},
		
	}
	,{
		"title": "July 2022",
		"cardTitle": "Beach day in Santa Cruz",
		"media": {
			"name": "Santa Cruz",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/personal/santacruz-yellow.png?t=2023-06-12T03%3A46%3A06.856Z"
			},
			"type": "IMAGE"
		},
		
	}
	,{
		"title": "August 2022",
		"cardTitle": "Yue's birthday in 2022",
		"media": {
			"name": "bday2022",
			"source": {
			"url": "https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/yue-bday22.png"
			},
			"type": "IMAGE"
		},
		
	}
	,{
		"title": "October 2022",
		"cardTitle": "First 5K race together on Kang-Li's 2022 birthday",
		"media": {
			"name": "klbday2022",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/58D8E1E0-1F62-41C7-ACD1-EF248634A847.JPG"
			},
			"type": "IMAGE"
		},
		
	}
	,{
		"title": "December 2022",
		"cardTitle": "We got maiired! legally :)",
		"media": {
			"name": "married",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/E5E43335-0BBF-4E89-AA15-EB0A89D28651.JPG"
			},
			"type": "IMAGE"
		},
		
	},
	{
		"title": "March 2023",
		"cardTitle": "Road trip across US",
		"media": {
			"name": "roadtrip",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/411E55DB-CF35-4211-B380-D08DD312A97B.JPG"
			},
			"type": "IMAGE"
		},
		
		
	},
	{
		"title": "March 2023",
		"cardTitle": "Visit Toast's birth place",
		"media": {
			"name": "toastbirth",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/EF7CCA93-C5AA-4AD7-BAB3-00464F3A5FFA.JPG"
			},
			"type": "IMAGE"
		},
		
		
	},
	{
		"title": "March 2023",
		"cardTitle": "Visit Kang-Li's birth place",
		"media": {
			"name": "klbirth",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/AA209C8A-9FC2-425E-ABC3-CA395463CECC.JPG"
			},
			"type": "IMAGE"
		},
		
		
	},
	{
		"title": "April 2023",
		"cardTitle": "Visit Disney World for the first time",
		"media": {
			"name": "disney",
			"source": {
			"url": "https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/9D9AF5DE-0EA1-4401-B1FD-E3C64D7E2B46.JPG"
			},
			"type": "IMAGE"
		},
		
		
	}
  ]
export const Story = () => {
	return (
		<div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
			<h2>Our Story in Pictures</h2>
			<div style={{ maxWidth: '850px' }}>
			<Chrono 
			fontSizes={{cardTitle: "18px", cardSubtitle: "15px", cardText:"16px"}}
			hideControls={true}
			// @ts-ignore
			items={items} mode="VERTICAL_ALTERNATING" />
			</div>
			<h2>More Pictures!</h2>
			<div style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
			</div>
		</div>
	);
};
