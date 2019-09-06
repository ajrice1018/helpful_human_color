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

    const [colors, setColors, setColor] = useState([]);
    
    useEffect(() => {
        const fetchColors = async () => {
          
          const res = await axios.get('api/colors');
          setColors(res.data);
          
        };
        
        fetchColors();
    }, []);
    const lenColors = colors.length;
    

    const changeColor = () => {
        const index = Math.floor(Math.random() * lenColors);
        const pickedColor = colors[index];
        setColor(pickedColor);

    };

  return (
    
            <div style={{backgroundColor: 'grey'}}>
            <Button variant="primary" className='randomColorButton' onClick={console.log()} onClick={changeColor} onClick={handleShow}>Random Color</Button>
            

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{}</Modal.Title>
                    </Modal.Header>
                            <Card  style={{}}></Card>
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