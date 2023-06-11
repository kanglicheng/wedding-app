import React from "react"

export const Pictures = () => {


    return (
        <div style={{maxWidth: "750px", display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', rowGap: "15px" }}>
          <figure>
            <img className={"image"} alt={'alt text'} src={"https://xesldvbvamzutxnexmdj.supabase.co/storage/v1/object/public/photos/yue-ivy.png?t=2023-06-11T16%3A03%3A29.980Z"} />
            <figcaption>Coming Soon!</figcaption>
          </figure>
        </div>
        )
}