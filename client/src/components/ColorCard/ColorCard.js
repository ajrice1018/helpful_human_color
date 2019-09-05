import React from "react";
import "./ColorCard.css";
import Card from "react-bootstrap/Card"

const ColorCard = (props) => {

    const color = props 

    

    return(

    <Card style={{backgroundColor:color.hex}} >
      <Card.Header style={{backgroundColor: "#FFFFFF" }}>{color.hex}</Card.Header>
    </Card>
    )
};

export default ColorCard;