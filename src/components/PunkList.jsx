import React from "react"
import CollectionCard from "./CollectionCard"
import "./PunkList.css"

function PunkList(props) {
  return (
    <div className="punkList">
      {props.punkListData.map(punk => (
        <div onClick = {() => props.setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url} />
        </div>
      ))}
    </div>
  )
};

export default PunkList;