import React from "react"
import "../styles.css"
import locationIcon from "../location-icon.png"
import dataJs from "../data"

export default function Card(props) {
    return (
        <div>
            <div className="card--container">
                <div className="card--img_container">
                    <img className="card--img" src={props.data.img}></img>
                </div>
                <div className="card--info_container">
                    <div className="card--location">
                        <img className="card--location_icon" src={locationIcon}></img>
                        <p className="card--location_name">{props.data.location.toUpperCase()}</p>
                        <a className="card--location_link" href={props.data.maps}>View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.data.title}</h1>
                    <p className="card--date">{props.data.start}{props.data.end && ` - ${props.data.end}`}</p>
                    <p className="card--description">{props.data.description}</p>
                </div>
            </div>
            {props.data.id !== dataJs.length && <hr className="card--separator" />}
        </div>
    )
}