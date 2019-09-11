import React, {useState} from "react";
import "./ColorCard.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "../../Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



const ColorCard = ({colors, loading}) => {
    const[show, setShow] = useState(false);
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    

    if(loading){
      return <h2>Loading....</h2>
    }
    
    

    return (
      <div>
      <Container>
        <Row style={{justifyContent:'center'}}>
          
              {colors.map(color=>(
                   
                <Card id={color.hex} onClick={handleShow} style={{backgroundColor:color.hex}} >
                  <Card.Header style={{backgroundColor: "#FFFFFF" }}>{color.hex}</Card.Header>
                </Card>
                
              ))}
          
        </Row>
      </Container>
      
      
      {colors.map(color =>(
      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{color.color}</Modal.Title>
          </Modal.Header>
          <Card id={color.hex}  style={{backgroundColor:color.hex}}></Card>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
        
        </div>
    );
    
};

export default ColorCard;