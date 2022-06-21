import React from "react";

const Card = (props) => {
  return(
    <div className="Card">
      <p>{props.name}</p>
      <img src={props.img} alt="Disco Elysium Character"/>
    </div>
  )
}

export {Card}
