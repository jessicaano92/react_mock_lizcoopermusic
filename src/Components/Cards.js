import React from 'react';
import CardItem from './CardItem';
import './Cards.css';




function Cards() {
    return (
        <div className="cards">
            <h1></h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src= "images/liz5.jpg"
                        text="Liz Cooper & The Stampede"
                        label="Singer Songwriter"
                        path="/biography"
                        />
                    </ul>
                  
                  
                </div>
            </div>
        </div>
    )
}

export default Cards
