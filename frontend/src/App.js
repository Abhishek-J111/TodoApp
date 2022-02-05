import logo from './logo.svg';
import './App.css';
 
import React,{useState}from 'react';
import { Container, Typography } from '@mui/material';
import MakeTopCard from './Components/MakeTopCard';
import { red } from '@mui/material/colors';



 const todoItems = [
   {
     id : 1,
     title : "Go to Market",
     completed : true,
   },
   {
    id : 1,
    title : "Go to Market",
    completed : true,
  }
 ]

 
 


export default function App() {
 
  return (
    <div
    style={{
      backgroundColor: '#8ed1fc',
      width: window.width,
      height :window.innerHeight,
    }}
    >
       <Container>
      
      <Typography>
        <h1 align="center"> To-Do App</h1>
      </Typography>
      <MakeTopCard></MakeTopCard>
    </Container> 
    </div>

  );
}

{/* <Container>
      
      <Typography>
        <h1 align="center"> To-Do App</h1>
      </Typography>
      <MakeTopCard></MakeTopCard>
    </Container> */}