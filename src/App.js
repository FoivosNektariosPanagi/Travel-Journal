import './style.css';
import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"


export default function App() {
    const cards = data.map(data => {
        return (
            <Card
                key={data.id}
                {...data}
            />
        )
    })        
    
    return (
        <div>
            <Navbar/>
            <section className="cards__list">
                {cards}
            </section>
        </div>
    )
}