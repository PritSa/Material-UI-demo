import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core";
import { green,orange } from "@material-ui/core/colors";

import '@fontsource/roboto/400.css';
import { Typography } from "@material-ui/core";

import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/core/Menu"

const useStyle = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border: 0,
    borderRadius:15,
    marginBottom:15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({

  typography: {
    h2:{
      fontSize:36,
      marginBottom:15
    }
  },
  
})

function ButtonStyled(){
  const classes = useStyle();
  return(
   
    <Button className={classes.root}>Test Styled Button</Button>
  )
}

export default function App() {
  const [checked, setCheked] = useState(true);
  return (
    
    <ThemeProvider theme={theme} >
    <Container maxWidth="">
    <div className="App">

    <AppBar color="secondary">
      <Toolbar>
        <IconButton>
          <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
           MUI Themeing
          </Typography>
          <Button>
            Login
          </Button>
        
      </Toolbar>
    </AppBar>

    <Typography variant="h2">Welcome to MUI</Typography>
    <Typography variant="subtitle1">Learn How to use Material UI</Typography>
     <div>
      <div>
      <ButtonStyled/>
      </div>
      <Grid container spacing={2} justify="center">
      <Grid item xs>
        <Paper style={{height:75, width:'100%'}}/>
      </Grid>
      <Grid item xs>
        <Paper style={{height:75, width:'100%'}}/>
      </Grid>
      <Grid item xs>
        <Paper style={{height:75, width:'100%'}}/>
      </Grid>
      </Grid>
      <TextField 
        variant="outlined"
        color = "primary"
        type = "date"
        lable="The Date"
      />
      </div>
      <div>
    <FormControlLabel 
     control={<Checkbox 
     checked={checked} 
     icon = {<SaveIcon/>}
     onChange={(e) => setCheked(e.target.value)}
      inputProps = {{
      'aria-label' : 'secondary checkbox'
      }} 
       />}
      label="Testing Checkbox"
   />
   </div>

      <ButtonGroup variant="contained" color="primary" style={{ fontSize: 15 }}>
        <Button endIcon={<SaveIcon />} onClick={() => alert("Hello")}>
          Save
        </Button>
        <Button endIcon={<DeleteIcon />}>Discard</Button>
      </ButtonGroup>
    </div>
    </Container>
    </ThemeProvider>
  );
}
