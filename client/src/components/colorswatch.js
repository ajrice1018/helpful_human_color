import React, { useState, useEffect }  from 'react';
import Pagination from './Pagination'
import axios from 'axios';
import ColorCard from "./ColorCard";
import Container from '../Container';
import Row from 'react-bootstrap/Row';
import Column from '../Column';
import SideBar from './SideBar';
import '../App.css';




const ColorSwatch = () => {
    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [colorsPerPage] = useState(104)
    const[setShow] = useState(false);
    
    const handleShow = () => setShow(true);

    
    useEffect(() => {
        const fetchColors = async () => {
          setLoading(true);
          const res = await axios.get('api/colors');
          setColors(res.data);
          
          setLoading(false);
        };
        
        fetchColors();
    }, []);
    
    // Get current colors
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colors.slice(indexOfFirstColor, indexOfLastColor);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);    
    
    
        return (
           <div> 
            
            <Container  >
            
           
                <Row className='randomNumber'>
                    <Column  style={{backgroundColor:'grey'}} size="md-3 sm-6">
                        <SideBar/>
                    </Column>
                </Row>
                
                <Row style={{justifyContent:'right'}}>
                    <ColorCard
                        onClick={handleShow}
                        colors = {currentColors}
                        loading ={loading}>
                    </ColorCard>
                </Row>
            </Container>
            
            <Container>
            
                <Row style={{justifyContent:'right'}}>
                    <Pagination
                        colorsPerPage={colorsPerPage}
                        totalColors={colors.length}
                        paginate={paginate}
                    > </Pagination>
                </Row>
            
        </Container>
            


        </div>     
        );
}


export default ColorSwatch;
