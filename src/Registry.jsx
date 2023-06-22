import React from 'react';

export const Registry = () => {
	return (
		<div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
			<h2>Our Registry</h2>
			<div style={{maxWidth: "35em"}}>
				<p style={{textAlign: "center"}}>
				As the saying goes, it&apos;s the thought that counts! We appreciate you being here with us above all else.
				For the items below, Zelle or Venmo are accepted. We also have an <strong><a href="https://www.amazon.com/wedding/share/yue_kangli_wedding">
				Amazon registry</a>. </strong>
				We of course welcome a gift of your own choosing too!
				</p>
			</div>
			<div className={window.innerWidth > 600 ? "rsvp-container" : "rsvp-device"}>
				<div style={{gridColumn: "1 / span 2"}}>
					<h4>Treats for Toast</h4>
					<figure>
						<img className={"thumb"} alt="toast" src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/toast.jpeg" />
						<figcaption>
							We are always running out of treats for this guy!
						</figcaption>
					</figure>
				</div>
				<div style={{gridColumn: "3 / span 2"}}>
					<h4>Trip to Kenya</h4>
					<figure>
						<img alt="kenya" className={"thumb"} src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/kenya.jpg?t=2023-06-18T01%3A48%3A57.514Z" />
						<figcaption>
							We want to go see <a href="https://kang-chun-cheng.format.com/">my sister</a> who lives in Kenya.
						</figcaption>
					</figure>
				</div>
				<div style={{gridColumn: "5 / span 2"}}>
					<h4>Future Education Fund <a href={"https://en.wikipedia.org/wiki/529_plan"}>(529)</a></h4>
					<figure>
						<img className={"thumb"} alt="529" src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/ugift.png?t=2023-06-18T01%3A56%3A13.773Z" />
						<figcaption>
							We don&apos;t have any yet, but just planning ahead for the future. Please contribute at <a href="https://www.ugift529.com/">Ugift </a> 
							and use the code <b>95E-J9M</b>.
						</figcaption>
					</figure>
				</div>
				<div style={{gridColumn: "2 / span 2"}}>
					<h4>House Plants</h4>
					<figure>
						<img className={"thumb"} src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/houseplants.png" alt="plants" />
						<figcaption>
							For making apartment life a little better.
						</figcaption>
					</figure>
				</div>
				<div style={{gridColumn: "4 span 2"}}>
					<h4>Methods of Remittance</h4>
					<p>Zelle: tuyue831@gmail.com</p>
					<a href="https://venmo.com/u/kangli2">Venmo: kangli2</a>
				</div>
			</div>
		</div>
	);
};
