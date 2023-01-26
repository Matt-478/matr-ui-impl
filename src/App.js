import React, { useEffect, useState }  from 'react';

import './App.css';
import { createTheme } from '@mui/material/styles';

import Box from './components/Box'
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    custom: {
      yellow: "b1780e",
      dblue: "210b69",
      pinkish: "b63842",
      lblue: "4296ff",
      lime: "b0bc1a",
    }
  }
});


function App() {

  const [apiCall, setApiCall] = useState()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '87cf04f455mshd260e6df25f60bap1b8868jsne2efda3b987d',
        'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
      }
    };
    
    fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=2', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => setApiCall(response))
      .catch(err => console.error(err));
  })

  return (
    <body>
      <h2>Nothing for now</h2>
      <Box color={theme.palette.custom} className="swatch"/>
      <Button 
        variant="outlined"
        size="small"
        >
          boopeeedoo
      </Button>
    </body>
  );
}


export default App;
