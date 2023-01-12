import * as React from 'react';

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
  return (
    <body>
      <h2>Nothing for now</h2>
      <Box color={theme.palette.custom} className="swatch"/>
      <Button 
        variant="outlined"
        size="small"
        >
          boop
      </Button>
    </body>
  );
}


export default App;
