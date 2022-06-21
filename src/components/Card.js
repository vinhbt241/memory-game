import React, { useState } from "react";

const Card = (props) => {
  return(
    <div>
      <p>{props.characterName}</p>
      <img src={props.imageSource} alt="Disco Elysium Character"/>
    </div>
  )
}

export {Card}
