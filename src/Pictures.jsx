import React from "react"

export const Pictures = () => {


    return (
        <div style={{maxWidth: "750px", display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', rowGap: "15px" }}>
        <figure>
          <img alt={'alt text'} src={"images/p1.png"} />
          <figcaption>Coming Soon!</figcaption>
        </figure>
		</div>
    )
}