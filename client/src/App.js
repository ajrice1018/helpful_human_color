import React from 'react';
import SearchBar from './components/navbar';
import ColorSwatch from './components/colorswatch';
import SideBar from './components/SideBar';
import Row from "react-bootstrap/Row";
import Column from './Column';
import Container from "./Container";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <SearchBar/>  
      <ColorSwatch/>
    </div>
      
  )  
}

export default App;
