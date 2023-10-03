import React from "react"
import "./styles.css"
import Navbar from "./components/Navbar"
import data from "./data.js"
import Card from "./components/Card"

export default function App() {
    const cardElements = data.map(
        element => {
            return <Card 
                    key={element.id}
                    data={element}
            />
        }
    )

    return (
        <div className="app--container">
            <Navbar />
            <div>
                {cardElements}
            </div>
        </div>
    )
}