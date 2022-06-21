import React from "react";

const Card = (props) => {
  return(
    <div>
      <p>{props.name}</p>
      <img src={props.img} alt="Disco Elysium Character"/>
    </div>
  )
}

export {Card}
