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
import titus from "../images/Titus.webp";
import acele from "../images/Acele.webp";
import annete from "../images/Annete.webp";
import cindy from "../images/Cindy.webp";
import crypto from "../images/Crypto.webp";
import deserter from "../images/Deserter.webp";
import diceMaker from "../images/Dice Maker.webp";
import gardener from "../images/Gardener.webp";
import lena from "../images/Lena.webp";

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
  {name: "Titus", img: titus},
  {name: "Acele", img: acele},
  {name: "Annete", img: annete},
  {name: "Cindy", img: cindy},
  {name: "Crypto", img: crypto},
  {name: "Deserter", img: deserter},
  {name: "Dice Maker", img: diceMaker},
  {name: "Gardener", img: gardener},
  {name: "Lena", img: lena}
]

const CardContainer = (props) => {

  const characterCards = characters.slice(3, 15).map(character => {
    return(
      <li key={character.name}>
        <Card name={character.name} img={character.img} />
      </li>
    )
  })

  return (
    <div className="CardContainer">
      <ul>{characterCards}</ul>
    </div>
  )
}

export { CardContainer }
