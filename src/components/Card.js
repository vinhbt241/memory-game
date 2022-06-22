import React from "react";

const Card = (props) => {

  const handleClick = () => {
    props.onClick(props.name);
  }

  return(
    <div className="Card" onClick={handleClick}>
      <p>{props.name}</p>
      <img src={props.img} alt="Disco Elysium Character"/>
    </div>
  )
}

export {Card}
