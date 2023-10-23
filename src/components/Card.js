import React from "react"

export default function Card(props) {   
   

    return (
        <div className="card">
            
            <img className="card_img" src={props.imageUrl} alt=""  />   
           <div className="card__content">
            <div className="card__country">
                <img src="../images/pin.svg" className="card__pinImg" alt="" />
                <h3 className="card__countryName">{props.location}</h3>
                <a href={props.googleMapsUrl} className="card__country_googleLink">View on Google Maps</a>
            </div>
               <h1 className="card__title">{props.title}</h1>               
               <p className="card__dates">{props.startDate} - {props.endDate}</p>   
               <p className="card_description">{props.description}</p>  
            </div>
        </div>
        
    )
}