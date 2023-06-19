import React from 'react';

export const Registry = () => {
	return (
		<div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
			<h2>Our Registry</h2>
			<div style={{maxWidth: "35em"}}>
				<p style={{textAlign: "center"}}>
				As the saying goes, it&apos;s the thought that counts! We appreciate you being here with us above all else.
				For the items below, Zelle or Venmo are accepted. We also have an <a href="https://www.amazon.com/wedding/share/yue_kangli_wedding">
				Amazon registry</a>.
				We of course welcome a gift of your own choosing too!
				</p>
			</div>
			<div style={{display: "grid", gridTemplateColumns: "repeat(3, 28vw)", margin:"12px"}}>
				<div>
					<h5>Treats for Toast</h5>
					<figure>
						<img className={"thumb"} alt="toast" src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/toast.jpeg" />
						<figcaption>
							We are always running out of treats for this guy!
						</figcaption>
					</figure>
				</div>
				<div>
					<h5>Trip to Kenya</h5>
					<figure>
						<img alt="kenya" className={"thumb"} src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/kenya.jpg?t=2023-06-18T01%3A48%3A57.514Z" />
						<figcaption>
							We want to go see <a href="https://kang-chun-cheng.format.com/">my sister</a> who lives in Kenya.
						</figcaption>
					</figure>
				</div>
				<div>
					<h5>Future Education Fund</h5>
					<figure>
						<img className={"thumb"} alt="529" src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/ugift.png?t=2023-06-18T01%3A56%3A13.773Z" />
						<figcaption>
							We don&apos;t have any yet, but just planning ahead for the future. Please contribute at <a href="https://www.ugift529.com/">Ugift </a> 
							and use the code <b>95E-J9M</b>.
						</figcaption>
					</figure>
				</div>
				<div>
					<h5>House Plants</h5>
					<figure>
						<img className={"thumb"} src="https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/houseplants.png" alt="plants" />
						<figcaption>
							For making apartment life a little better.
						</figcaption>
					</figure>
				</div>
				<div></div>
				<div>
					<h5>Methods of Remittance</h5>
					<p>Zelle: tuyue831@gmail.com</p>
					<a href="https://venmo.com/u/kangli2">Venmo</a>
				</div>
			</div>
		</div>
	);
};
