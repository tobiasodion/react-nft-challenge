import React from "react"
import weth from "../assets/weth.png"
import "./CollectionCard.css"

function CollectionCard(props){
    return(
        <div className="collectionCard">
            <img src = {props.image} alt = "" />
            <div className = "details">
            <div className = "name">{props.name}
            <div className = "id">.#{props.id}</div>
            </div>     
            <div className="priceContainer">
                <img src = {weth} className = "wethImage" alt=""/>
                <div className = "price">{props.traits[0]?.value}</div>
            </div>
            </div>
        </div>
    );
}

export default CollectionCard;