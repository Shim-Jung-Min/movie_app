import React from 'react';
import PropTypes from "prop-types";

function Food({ name, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5</h4>
        </div>

    )}

Food.propTypes ={
    name: PropTypes.string.isRequired,
    rating: PropTypes.number
}

const foodILike = [
    {
        id:1,
        name: "Pizza"
    },
    {
        id:2,
        name: "Pasta",
        rating: 5
    },
    {
        id:3,
        name: "Potato",
        rating: 5
    },
    {
        id:4,
        name: "Pisundae",
        rating: 5
    },
    {
        id:5,
        name: "Prapuccino",
        rating: 5
    },
    {
        id:6,
        name: "Prape",
        rating: 5
    },
    {
        id:7,
        name: "Platccino",
        rating: 5
    }
];

function App() {
    return ( 
        <div>
            <h1> Hi </h1> 
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} rating={dish.rating}/>
            ))}
        </div>
    );
}

export default App;