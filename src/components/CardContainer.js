import React, { useState } from "react";
import { Card } from "./Card";

import andre from "../images/Andre.webp";
import cuno from "../images/Cuno.webp";
import eggHead from "../images/Egghead.webp";
import evart from "../images/Evart.webp";
import garte from "../images/Garte.webp";
import hanged from "../images/Hanged Man.webp";
import klaasje from "../images/Klaasje.webp";
import noid from "../images/Noid.webp";
import titus from "../images/Titus.webp";
import acele from "../images/Acele.webp";
import annete from "../images/Annete.webp";
import cindy from "../images/Cindy.webp";

const characters = [
  {name: "Andre", img: andre},
  {name: "Cuno", img: cuno},
  {name: "Egg Head", img: eggHead},
  {name: "Evart", img: evart},
  {name: "Garte", img: garte},
  {name: "The Hanged Man", img: hanged},
  {name: "Klaasje", img: klaasje},
  {name: "Noid", img: noid},
  {name: "Titus", img: titus},
  {name: "Acele", img: acele},
  {name: "Annete", img: annete},
  {name: "Cindy", img: cindy}
]

const CardContainer = (props) => {
  const[cards, setCards] = useState(characters.slice());

  const shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const handleClick = (name) => {
    setCards(shuffleArray(cards.slice()));
    props.processClick(name)
  }

  const cardList = cards.map(character => {
    return(
      <Card 
      key={character.name}
      name={character.name} 
      img={character.img} 
      onClick={handleClick}/>
    )
  })

  return (
    <div className="CardContainer">
      {cardList}
    </div>
  )
}

export { CardContainer }
