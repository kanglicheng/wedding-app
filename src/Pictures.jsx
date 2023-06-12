import React from "react"

export const Pictures = () => {


    return (
        <div style={{maxWidth: "750px", display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', rowGap: "15px" }}>
          <figure>
            <img className={"image"} alt={'alt text'} src={"https://gyesgoqhxmpfhaqfvklq.supabase.co/storage/v1/object/public/property-photos/yue-ivy.png?t=2023-06-12T03%3A19%3A13.368Z"} />
            <figcaption>Coming Soon!</figcaption>
          </figure>
        </div>
        )
}