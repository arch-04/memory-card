import React from "react";
import {useState, useEffect} from "react"
import "./cards.css"

function Card( {pokemonName, onCardsPick} ){ 
    const [image, setImage] = useState("");
    const [text , setText] = useState("");

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => res.json())
        .then((data) => {
            const imageUrl = data.sprites.front_default;
            setImage(imageUrl);
            const text = data.forms[0].name;
            setText(text);
        })
        .catch((error) => console.error("error fetching data", error))
    }, [pokemonName]);

    const handleClick = () => {
        onCardsPick(pokemonName);
    }
    
    return(
        <div className="cards" onClick={handleClick}>
            <div className="card">
                <img src={image} alt="" />
                <h1>{text}</h1>
            </div>
        </div>
    );
};

function Cards({ pokemonName,currentScore, setCurrentScore, bestScore, setBestScore  }) {
    let [pickedCards, setPickedCards] = useState([]);
    const shufledNames = pokemonName.sort(() => Math.random() - 0.5);
    
    const handleCardPick = (name) => {
        if(!pickedCards.includes(name)){
            setPickedCards([...pickedCards, name])
            setCurrentScore(prevScore => prevScore + 1)
        }else{
            if(currentScore > 11){
                alert('You won 12/12');
            }else{
                alert(`You lost ${currentScore}/12`);
            }
            if(currentScore > bestScore){
                setBestScore(currentScore);
            }
            setPickedCards([]);
            setCurrentScore(0);
        }
    }



    return (
        <div className="cards">
            {shufledNames.map((name, index) => (
                <Card key={index} pokemonName={name} onCardsPick={handleCardPick}/>
            ))}
        </div>
    );
};

export default Cards;