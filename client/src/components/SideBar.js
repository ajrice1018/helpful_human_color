import React, { useState, useEffect } from "react";
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
    
    
   
        
    
    
    useEffect(() => {
        const randomNumber = () => {
            const index = Math.ceil(Math.random() * 1054);
            
            return index
        } 
        
        let index = randomNumber()
        const fetchColors = async () => {
          
          const res = await axios.get(`api/colors/${index}`);
          
          let randomColor = res.data;
          
          setRandomColor(randomColor);
          
        };
        
        fetchColors();
    }, []);
    
    
    

  return (
    
            <div style={{backgroundColor: 'grey'}}>
            <Button variant="primary" className='randomColorButton'  onClick={handleShow}  >Random Color</Button>
            

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{randomColor.color}</Modal.Title>
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