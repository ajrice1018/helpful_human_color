import React, { useState } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../App.css';

const SideBar = () => {
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [randomColor,setRandomColor] = useState([]);
    
    
    const randomNumber = () => {
        const index = Math.ceil(Math.random() * 1054);
        
        const fetchColors = async () => {
          
            const res = await axios.get(`api/colors/${index}`);
            
            let randomColor = res.data;
            
            setRandomColor(randomColor);
            
          };
          
          fetchColors();
        
        handleShow()
        return index
    } 

  return (
    
            <div style={{backgroundColor: 'grey'}}>
            <Button variant="primary" className='randomColorButton'  onClick={randomNumber}  >Random Color</Button>
            

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{randomColor.hex} </Modal.Title>
                    </Modal.Header>
                            <Card  style={{backgroundColor: randomColor.hex}}></Card>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            
            </div>
           
  );
};

export default SideBar