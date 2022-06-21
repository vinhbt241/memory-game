import React from "react";
import { Card } from "./Card";

import harry from "../images/Harry Dubois.webp";
import kim from "../images/Kim Kitsuragi.webp";
import soona from "../images/Soona.webp";
import andre from "../images/Andre.webp";
import cuno from "../images/Cuno.webp";
import eggHead from "../images/Egghead.webp";
import evart from "../images/Evart.webp";
import garte from "../images/Garte.webp";
import hanged from "../images/Hanged Man.webp";
import klaasje from "../images/Klaasje.webp";
import noid from "../images/Noid.webp";
import titus from "../images/Titus.webp"

const characters = [
  {name: "Harry Dubois", img: harry},
  {name: "Kim Kitsuragi", img: kim},
  {name: "Soona", img: soona},
  {name: "Andre", img: andre},
  {name: "Cuno", img: cuno},
  {name: "Egg Head", img: eggHead},
  {name: "Evart", img: evart},
  {name: "Garte", img: garte},
  {name: "The Hanged Man", img: hanged},
  {name: "Klaasje", img: klaasje},
  {name: "Noid", img: noid},
  {name: "Titus", img: titus}
]

const CardContainer = (props) => {
  const characterCards = characters.map(character => {
    return(
      <li key={character.name}>
        <Card name={character.name} img={character.img} />
      </li>
    )
  })

  return (
    <div>
      <ul>{characterCards}</ul>
    </div>
  )
}

export { CardContainer }
