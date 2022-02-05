import {  Card, Button, Container, Stack , Modal,Box, TextField, Typography} from '@mui/material';
import axios from 'axios';

import React ,{ useState } from 'react';
import ListItem from './ListItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function MakeTopCard() {

  const[title, setTitle] = React.useState('');
  const[description,setDescription] = useState('');
  const [open , setOpen] = React.useState(false);

  const handleData = ()=> {
    let data = {
      'title' : title,
      'description' : description
    }
    axios.post('http://localhost:8000/api/todos/',data)
    setTitle('')
    setDescription('')
  };
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = ()=> {
    handleData()
    setOpen(false)
  };
  return (
    <Container> 
      <Button sx={{ml:3}} style={{border : '4px dashed ' }} onClick={handleOpen}>Add Task</Button>
      <Modal
        hideBackdrop
        open = {open}
        onClose={handleClose}
      >
        <Box 
          sx={{...style,width:600}}
        >
           <Box
           sx={{
             width:500,
             maxWidth :'100%',
           }}
           >
             <Typography sx={{m:1}}>Enter Task</Typography>
             <TextField fullWidth label="Title" value={title} onChange = {(e) => {setTitle(e.target.value)}} sx={{m:1}}></TextField>
             <TextField fullWidth label="Description"  value={description} onChange = {(e) => {setDescription(e.target.value)}} sx={{m:1}} ></TextField>

           </Box>
          <Button variant="contained" size='small' onClick={handleClose}>Save </Button>
        </Box>
         
      </Modal>
        
    <ListItem></ListItem>
    </Container>

   
  );
}



// <Card   style={{backgroundColor :"#A8D5BAFF"}}>
    
//     <Stack >
//     <Container>
//    <Button variant="contained" size='small' color='success' sx ={{mt:1 , ml:-1}}>Add Task</Button>
//    </Container>
//    <Stack direction="row"  sx={{ml:1 , mb:1 , mt:1}}>

//    <Button variant="outlined" size='small' sx={{ml:1 , mb:1}} >Complete</Button>
//    <Button variant="outlined" size='small' sx={{ml:2, mb:1}} >Complete</Button>

   
//    </Stack>
   
//    </Stack>
   
//   </Card>