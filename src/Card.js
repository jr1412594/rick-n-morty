import React from 'react'

export default function Card({character}){
    return (
        <div className="card">
            <img src={character.image} alt={`${character.name}`}/>
            <h3>{character.name}</h3>
        </div>
    )
}