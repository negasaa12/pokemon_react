import React from "react";
import "./Pokecard.css";
import pokemons from "./Pokedex";


const Pokecard = ({id,name, type, base_experience, src})=> {

      
    return (
        <div className="Pokecard" >
            <h2 className="Pokecard-title">{name}</h2>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>

            <p className="Pokecard-p">Type: {type}</p>
            <p className="Pokecard-p">EXP: {base_experience}</p>

           
        </div>

    )
};

export default Pokecard;