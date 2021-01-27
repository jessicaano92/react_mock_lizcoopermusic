import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Music for the soul</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src="images/bg1.jpg"
                        text="Liz Cooper Herself"
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
