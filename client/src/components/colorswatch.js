import React, { Component }  from 'react';
import Container from "../Container";
import ColorCard from ".//ColorCard";
import Row from "../Row";
import Column from "../Column";
import Wrapper from "./Wrapper";


class ColorSwatch extends Component{
    state={
        colors:[]
    };

    componentDidMount(){
        this.getColors();
    }

    getColors(){
        fetch('/api/colors',{
            method: 'GET'
        }).then(response =>{ return response.json()})
        .then(data =>{
            this.setState({
                colors: data
            })
            
        }).catch(err =>{
            console.log('error' + err)
        })
    }
    
    render(){
        return (
            <Wrapper>
                <Container>
                    <Row>
                        {this.state.colors.map(color => (
                        <Column size="md-3 sm-6">
                        <ColorCard
                            key = {color.key}
                            color={color.color}
                            hex={color.hex}
                            />
                        </Column>
                        ))}
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}

export default ColorSwatch;
